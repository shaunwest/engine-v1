import { RECEIVED_SCENE, RECEIVED_SCENE_ERROR, SCENE_READY } from '../actions/scene';
import { subscribeImmutable, subscribeMutable } from '../store';

export default () => {
  subscribeImmutable(RECEIVED_SCENE, (state, scene) =>
    Object.assign({}, state, { scene }));

  subscribeMutable(SCENE_READY, state => state.ready = true);
};
