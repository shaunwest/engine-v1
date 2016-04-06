import { INIT_ANIMATIONS, CREATED_ANIMATION } from '../actions/animations';
import { subscribe } from '../store';

export default () => {
  subscribe(INIT_ANIMATIONS, (store, animations) => store.mutable.animations = animations);

  subscribe(CREATED_ANIMATION, (store, tileSheetId, index, name, animation) => {
    if (!store.mutable.animations[tileSheetId]) {
      store.mutable.animations[tileSheetId] = [];
    }
  
    if (!store.mutable.animations[tileSheetId][index]) {
      store.mutable.animations[tileSheetId][index] = {};
    }
    Object.assign(store.mutable.animations[tileSheetId][index], { [name]: animation });
  });
};
