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

// Some helpful getters
const getters = {
  getLayerData: layerId => _store.immutable.scene.layers[layerId],
  getLayer: layerId => _store.mutable.layers[layerId],
  getViewport: () => _store.mutable.viewport,
  getFrameTable: () => _store.mutable.frameTable,
  getTileSheetId: layerId => _store.immutable.scene.layers[layerId].tileSheet,
  getSpriteAnimations: layerId => _store.mutable.animations[_store.immutable.scene.layers[layerId].tileSheet]
};

Object.assign(_store, getters);
