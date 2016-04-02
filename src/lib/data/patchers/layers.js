import { INIT_LAYERS, COPY_LAYOUT, CREATE_SEGMENTS } from '../actions/layers.js';
import { _immutableStore, subscribeMutable } from '../store.js';

export default () => {
  subscribeMutable(INIT_LAYERS, (state, layers) => state.layers = layers);
  subscribeMutable(COPY_LAYOUT, (state, layerId) =>
    state.layers[layerId] = _immutableStore.state.scene.layers[layerId].layout);
  subscribeMutable(CREATE_SEGMENTS, (state, layerId, segments) =>
    state.layers[layerId] = segments)
};
