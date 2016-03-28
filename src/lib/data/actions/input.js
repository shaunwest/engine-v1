import { publishMutable } from '../store.js';

export const INIT_INPUT = 'INIT_INPUT';

export const initInput = (inputData = {}) => publishMutable(INIT_INPUT, inputData);
