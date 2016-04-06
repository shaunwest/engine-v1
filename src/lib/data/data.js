import initPatchers from './patchers/patchers';
import { fetchScene, sceneReady } from './actions/scene';
import { fetchTileSheetData, fetchTileSheetImage, processTileSheet } from './actions/tile-sheets';
//import { initPool } from './actions/pool.js';
import { initLoop } from './actions/loop.js';
import { initViewport } from './actions/viewport.js';
import { initInput } from './actions/input.js';
import { initFrameTable } from './actions/frame-table.js';
import { initAnimations, createAnimations } from './actions/animations.js';
import { initLayers, copyLayout, createLayoutSegments } from './actions/layers.js';

export const initAndFetch = sceneUrl => {
  initPatchers();
  /* probably not going to have pool in store
  initPool({
    objects: [],
    objectPointer: 0,
    arrays: [],
    arrayPointer: 0
  });*/
  initAnimations();
  initFrameTable();
  initLayers();
  initViewport({
    x: 0,
    y: 0,
    width: 16,
    height: 15
  });
  initLoop({
    paused: false,
    callbacks: {},
    last: 0, 
    fps: 0,
    timer: 0,
    sFrameCount: 0,
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

    if (layer.layoutType === 'FIXED_2D')
      copyLayout(layerId);
    else 
      createLayoutSegments(layerId);
    
    return fetchTileSheetData(layer.tileSheet + '.json').then(onFetchTileSheetData(layer));
  }));

const onFetchTileSheetData = layer => tileSheetData =>
  fetchTileSheetImage(tileSheetData.src).then(onFetchTileSheetImage(tileSheetData.id, tileSheetData.tiles, layer.layoutType));

const onFetchTileSheetImage = (tileSheetId, tiles, layoutType) => tileSheetImage =>
  processTileSheet(tileSheetId, tileSheetImage, tiles);

export const updateData = () => {}
