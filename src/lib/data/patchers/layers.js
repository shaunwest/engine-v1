import { INIT_LAYERS, COPY_LAYOUT } from '../actions/layers.js';
import { _immutableStore, subscribeMutable } from '../store.js';

export default () => {
  subscribeMutable(INIT_LAYERS, (state, layers) => state.layers = layers);
  subscribeMutable(COPY_LAYOUT, (state, layerId) =>
    state.layers[layerId] = _immutableStore.state.scene.layers[layerId].layout);
};
