import { publishMutable } from '../store.js';

export const INIT_POOL = 'INIT_POOL';

export const initPool = pool => publishMutable(INIT_POOL, pool);
