import { publishMutable } from '../store.js';

export const INIT_LAYERS = 'INIT_LAYERS';
export const COPY_LAYOUT = 'COPY_LAYOUT';

export const initLayers = (layers = {}) => publishMutable(INIT_LAYERS, layers);
export const copyLayout = layerId => publishMutable(COPY_LAYOUT, layerId);
