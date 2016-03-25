import { INIT_LOOP } from '../actions/loop';
import { subscribeMutable } from '../store.js';

export default () => {
  subscribeMutable(INIT_LOOP, (state, loopData) => state.loop = loopData);
}
