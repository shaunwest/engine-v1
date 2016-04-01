import { publishMutable } from '../store.js';

export const INIT_VIEWPORT = 'INIT_VIEWPORT';

export const initViewport = (viewportData = {}) => publishMutable(INIT_VIEWPORT, viewportData);
