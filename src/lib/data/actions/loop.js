import { publishMutable } from '../store.js';

export const INIT_LOOP = 'INIT_LOOP';

export const initLoop = (loopData = {}) => publishMutable(INIT_LOOP, loopData);
