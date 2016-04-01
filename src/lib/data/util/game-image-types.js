export const basic = (animationDataSet, animationSet, targetFps, frameCount) =>
  getFrame(animationSet.basic, getFrameRatio(targetFps, animationDataSet.basic.fps || targetFps), frameCount);

export const waitThenCycle = (animationDataSet, animationSet, targetFps, frameCount) => {
  const cycleFrameIndex = Math.floor((frameCount % animationDataSet.cycle.every) / getFrameRatio(targetFps, animationDataSet.cycle.fps || targetFps));

  return (cycleFrameIndex < animationSet.cycle.length) ?
    animationSet.cycle[cycleFrameIndex] :
    basic(animationDataSet, animationSet, targetFps, frameCount);
}

const getFrameRatio = (targetFps, animationFps) => targetFps / animationFps;

const getFrame = (animation, frameRatio, frameCount) =>
  (!animation || !animation.length) ?
    null : 
    animation[getFrameIndex(animation.length, frameRatio, frameCount)];

const getFrameIndex = (animationLength, frameRatio, frameCount) =>
  (Math.floor(frameCount / frameRatio) % animationLength) || 0;
