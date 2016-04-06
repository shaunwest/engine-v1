import { INIT_POOL } from '../actions/pool';
import { subscribe } from '../store';

export default () => {
  subscribe(INIT_POOL, (store, pool) => store.mutable.pool = pool);
}
