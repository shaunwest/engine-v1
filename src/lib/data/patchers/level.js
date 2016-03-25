import { RECEIVED_LEVEL, RECEIVED_LEVEL_ERROR, LEVEL_READY } from '../actions/level.js';
import { subscribeImmutable } from '../store.js';

export default () => {
  subscribeImmutable(RECEIVED_LEVEL, (state, level) =>
    Object.assign({}, state, { level }));

  subscribeImmutable(LEVEL_READY, (state) =>
    Object.assign({}, state, { ready: true }));
};
