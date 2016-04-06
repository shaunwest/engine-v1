import { INIT_LOOP } from '../actions/loop';
import { subscribe } from '../store.js';

export default () => {
  subscribe(INIT_LOOP, (store, loopData) => store.mutable.loop = loopData);
}
