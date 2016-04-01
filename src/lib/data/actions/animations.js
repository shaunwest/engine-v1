import { publishMutable } from '../store.js';
import { getAnimation } from '../util/image-sheet-processor.js';

export const INIT_ANIMATIONS = 'INIT_ANIMATIONS';
export const CREATED_ANIMATION = 'CREATED_ANIMATION';

export const initAnimations = (animations = {}) => publishMutable(INIT_ANIMATIONS, animations);

export const createAnimations = (tileSheetId, imageSheet, gameImageIndex, gameImage) => {
  const { width, height, frames } = gameImage;

  Object.keys(frames).forEach(name => {
    const animationData = frames[name];
    const animation = getAnimation(
      imageSheet,
      animationData.x,
      animationData.y,
      width,
      height,
      animationData.xRange
    );

    publishMutable(CREATED_ANIMATION, tileSheetId, gameImageIndex, name, animation);
  });
};
