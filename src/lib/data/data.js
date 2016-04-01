import initPatchers from './patchers/patchers';
import { fetchScene, sceneReady } from './actions/scene';
import { fetchTileSheetData, fetchTileSheetImage, processTileSheet } from './actions/tile-sheets';
import { initLoop } from './actions/loop.js';
import { initViewport } from './actions/viewport.js';
import { initInput } from './actions/input.js';
import { initFrameTable } from './actions/frame-table.js';
import { initAnimations, createAnimations } from './actions/animations.js';
import { initLayers, copyLayout } from './actions/layers.js';
import { _immutableStore } from './store.js';

export const initAndFetch = (sceneUrl) => {
  initPatchers();
  initAnimations();
  initFrameTable();
  initLayers();
  initViewport({
    x: 0,
    y: 0,
    width: 256,
    height: 240
  });
  initLoop({
    paused: false,
    callbacks: new Map(),
    last: 0, 
    fps: 0,
    vFrameCount: 0,
    aFrameCount: 0,
    totalElapsed: 0,
    lastAnimationFrameId: null
  });
  initInput({
    isPressed: false,
    isActive: false,
    position: null,
    initialPressPosition: null,
    lastPosition: null,
    keysPressed: []
  });

  return fetchData(sceneUrl).then(() => sceneReady());
};

// TODO: change tileSheet to imageSheet, change tiles to images

const fetchData = sceneUrl => fetchScene(sceneUrl).then(onFetchScene);

const onFetchScene = sceneData =>
  Promise.all(Object.keys(sceneData.layers).map(layerId => {
    const layer = sceneData.layers[layerId];
    copyLayout(layerId);
    return fetchTileSheetData(layer.tileSheet + '.json').then(onFetchTileSheetData(layer));
  }));

const onFetchTileSheetData = layer => tileSheetData =>
  fetchTileSheetImage(tileSheetData.src).then(onFetchTileSheetImage(tileSheetData.id, tileSheetData.tiles, layer.layoutType));

const onFetchTileSheetImage = (tileSheetId, tiles, layoutType) => tileSheetImage => {
  switch (layoutType) {
    case 'FIXED_2D':
      processTileSheet(tileSheetId, tileSheetImage, tiles);
      break;
    case 'FREE_2D':
      processTileSheet(tileSheetId, tileSheetImage, tiles);
      break;
  }
}

export const updateData = () => {}
