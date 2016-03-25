//const types = { basic, waitThenCycle };

/*
export function updateFrameTable(frameTable, gameImageDataSet, gameImageSet, targetFps, frameCount) {
  frameTable.length = 0;

  const numGameImages = (gameImageDataSet) ? gameImageDataSet.length : 0;

  for (let i = 0; i < numGameImages; i++) {
    const type = gameImageDataSet[i].type || 'basic';

    frameTable.push(types[type](
      gameImageDataSet[i].frames,
      gameImageSet[i],
      targetFps,
      frameCount
    ));
  }
}
*/

export function basic(animationDataSet, animationSet, targetFps, frameCount) {
  const animation = animationSet.basic;
  const keyFrame = getKeyFrame(targetFps, animationDataSet.basic.fps || targetFps);
  return getFrame(animation, keyFrame, frameCount);
}

export function waitThenCycle(animationDataSet, animationSet, targetFps, frameCount) {
  return basic(animationDataSet, animationSet, targetFps, frameCount);

  // FIXME: Rethink without the 'cycling' state var
  const cycleAnimationData = animationDataSet.cycle;
  const cycleAnimation = cycleAnimationData.animation;
  const every = frameCount % cycleAnimationData.every;

  if (every === 0) {
    sequence.cycling = true;
  }

  if (sequence.cycling) {
    const keyFrame = getKeyFrame(targetFps, cycleAnimationData.fps || targetFps);
    const index = getFrameIndex(cycleAnimation.length + 1, keyFrame, frameCount);
    if (index === cycleAnimation.length) {
      sequence.cycling = false;
      return basic(animationDataSet, targetFps, frameCount);
    } else {
      return cycleAnimation[index];
    }
  } else {
    return basic(animationDataSet, targetFps, frameCount);
  }
}

function getKeyFrame(targetFps, sequenceFps) {
  return targetFps / sequenceFps;
}

function getFrame(animation, keyFrame, frameCount) {
  return (!animation || !animation.length) ?
    null : 
    animation[getFrameIndex(animation.length, keyFrame, frameCount)];
}

function getFrameIndex(animationLength, keyFrame, frameCount) {
  return (Math.floor(frameCount / keyFrame) % animationLength) || 0;
}
