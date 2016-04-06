import { INIT_LAYERS, COPY_LAYOUT, CREATE_SEGMENTS } from '../actions/layers.js';
import { subscribe } from '../store.js';

export default () => {
  subscribe(INIT_LAYERS, (store, layers) => store.mutable.layers = layers);
  subscribe(COPY_LAYOUT, (store, layerId) =>
    store.mutable.layers[layerId] = store.immutable.scene.layers[layerId].layout);
  subscribe(CREATE_SEGMENTS, (store, layerId, segments) =>
    store.mutable.layers[layerId] = segments)
};
