import { _store, publishMutable } from '../store.js';
import { createFree2dSegments } from '../segments.js';

export const INIT_LAYERS = 'INIT_LAYERS';
export const COPY_LAYOUT = 'COPY_LAYOUT';
export const CREATE_SEGMENTS = 'CREATE_SEGMENTS';

export const initLayers = (layers = {}) => publishMutable(INIT_LAYERS, layers);
export const copyLayout = layerId => publishMutable(COPY_LAYOUT, layerId);

export const createLayoutSegments = layerId => {
  const layer = _store.immutable.scene.layers[layerId];
  const segments = createFree2dSegments(
    layer.layout,
    layer.width,
    layer.height,
    128 
  )

  publishMutable(CREATE_SEGMENTS, layerId, segments)
}
