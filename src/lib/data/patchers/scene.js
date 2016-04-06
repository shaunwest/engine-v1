import { RECEIVED_SCENE, RECEIVED_SCENE_ERROR, SCENE_READY } from '../actions/scene';
import { subscribe } from '../store';

export default () => {
  subscribe(RECEIVED_SCENE, (store, scene) =>
    Object.assign({}, store.immutable, { scene }));

  subscribe(SCENE_READY, store => store.mutable.ready = true);
};
