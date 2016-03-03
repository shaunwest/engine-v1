import { clear } from './obj.js';

export function ObjectPool() {
  const pool = [];

  const makeNew = () => release({});
  const getExisting = () => clear(pool.pop());
  const get = () => getExisting() || makeNew();

  const release = (obj) => {
    pool.push(obj);
    return obj;
  };

  return {
    get,
    release
  };
}
