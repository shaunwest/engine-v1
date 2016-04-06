import { createDataStore, createSub,
  createPubImmutable, createPubMutable } from 'base-utils/data-store.js';

export const _store = createDataStore();

if (global) {
  global.store = _store;
} else {
  window.store = _store;
}

export const subscribe = createSub(_store);
export const publishImmutable = createPubImmutable(_store);
export const publishMutable = createPubMutable(_store);

// Some helpers
export const getLayerData = layerId => _store.immutable.scene.layers[layerId];
export const getLayer = layerId => _store.mutable.layers[layerId];
export const getViewport = () => _store.mutable.viewport;
export const getFrameTable = () => _store.mutable.frameTable;
export const getTileSheetId = layerId => _store.immutable.scene.layers[layerId].tileSheet;
