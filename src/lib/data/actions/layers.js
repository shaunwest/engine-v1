import { _store, publishMutable } from '../store.js';
import { createFree2dSegments } from '../segments.js';

export const INIT_LAYERS = 'INIT_LAYERS';
export const COPY_LAYOUT = 'COPY_LAYOUT';
export const CREATE_SEGMENTS = 'CREATE_SEGMENTS';

export const initLayers = (layers = {}) => publishMutable(INIT_LAYERS, layers);
export const copyLayout = layerId => publishMutable(COPY_LAYOUT, layerId);

export const createLayoutSegments = layerId => {
  const scene = _store.immutable.scene;
  const segments = createFree2dSegments(
    scene.layers[layerId].layout,
    scene.sceneWidth,
    scene.sceneHeight,
    128 
  )

  publishMutable(CREATE_SEGMENTS, layerId, segments)
}
