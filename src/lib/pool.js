import { objectPoolState } from './state/_pool.js';
import { clear } from './obj.js';

export const get = () => getExisting() || makeNew();
export const makeNew = () => release({});
export const getExisting = () => clear(objectPoolState.pop());
export const release = obj => {
  objectPoolState.push(obj);
  return obj;
};
