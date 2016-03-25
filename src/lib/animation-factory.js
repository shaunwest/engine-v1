/**
 * animation-factory.js
 *
 * Get an animation from an animation set depending on target FPS 
 * and current frame count
 */

import { getArray } from 'base-utils/pool.js';
import * as GameImageTypes from './game-image-types.js';

export function AnimationFactory(animationSet, targetFps, frameCount) {
  const animation = getArray();
  const numAnimations = (animationSet) ? animationSet.length : 0;

  for (let i = 0; i < numAnimations; i++) {
    const type = animationDataSet[i].type || 'basic';

    animation.push(
      GameImageTypes[type](
        animationDataSet[i],
        targetFps,
        frameCount
      )
    );
  }

  return animation;
}
