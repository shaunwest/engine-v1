import initPatchers from './patchers/patchers';
import { fetchLevel, levelReady } from './actions/level';
import { fetchTileSheetData, fetchTileSheetImage, processTileSheet } from './actions/tile-sheets';
import { initLoop } from './actions/loop.js';
import { initInput } from './actions/input.js';
import { initFrameTable } from './actions/frame-table.js';
import { initAnimations, createAnimations } from './actions/animations.js';
import { _immutableStore } from './store.js';

export const initAndFetch = () => {
  initPatchers();
  initAnimations();
  initFrameTable();
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
    lastPosition: null
  });

  return fetchData();
};

export const fetchData = () =>
  // TODO: change to fetchScene
  fetchLevel('http://localhost:3000/data/kitty-world.json').then(json =>
    Object.keys(json.layers).map(layerId =>
      fetchTileSheetData(json.layers[layerId].tileSheet + '.json').then(json =>
        fetchTileSheetImage(json.src).then(img => { 
          processTileSheet(json.id, img, _immutableStore.state.tileSheets[json.id].tiles);
          levelReady();
        }))));

export const updateData = () => {}
