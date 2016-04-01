import { INIT_ANIMATIONS, CREATED_ANIMATION } from '../actions/animations';
import { subscribeMutable } from '../store';

export default () => {
  subscribeMutable(INIT_ANIMATIONS, (state, animations) => state.animations = animations);

  subscribeMutable(CREATED_ANIMATION, (state, tileSheetId, index, name, animation) => {
    if (!state.animations[tileSheetId]) {
      state.animations[tileSheetId] = [];
    }
  
    if (!state.animations[tileSheetId][index]) {
      state.animations[tileSheetId][index] = {};
    }
    Object.assign(state.animations[tileSheetId][index], { [name]: animation });
  });
};
