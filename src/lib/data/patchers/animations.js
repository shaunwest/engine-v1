import { INIT_ANIMATIONS, CREATED_ANIMATION } from '../actions/animations';
import { subscribeNonSerializable } from '../store';

export default () => {
  subscribeNonSerializable(INIT_ANIMATIONS, (state, animations) => state.animations = animations);

  subscribeNonSerializable(CREATED_ANIMATION, (state, tileSheetId, index, name, animation) => {
    if (!state.animations[tileSheetId]) {
      state.animations[tileSheetId] = [];
    }
  
    if (!state.animations[tileSheetId][index]) {
      state.animations[tileSheetId][index] = {};
    }
    Object.assign(state.animations[tileSheetId][index], { [name]: animation });
  });
};
