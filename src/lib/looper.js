/**
 * Created by shaunwest on 6/20/15.
 */

/* 
 * TODO: put more of the loop consts into loopState so there's less
 * to garbage collect. Plus more information for debugging.
 *
 * TODO: since loopState is separate, can Looper just be called
 * every time we need to attach a callback to the loop?
 */

export const TARGET_FPS = 60;
const MS_PER_SECOND = 1000;

const noop = function () {};
const requestAnimationFrame = global.requestAnimationFrame || noop;
const cancelAnimationFrame = global.cancelAnimationFrame || noop;
const getDeltaTime = (now, lastUpdateTime) => (now - lastUpdateTime) / MS_PER_SECOND;

export default function Looper(loopState) {
  if (loopState.lastAnimationFrameId) {
    cancelAnimationFrame(loopState.lastAnimationFrameId);
  }
  loopState.last = Date.now();
  
  function loop() {
    const now = Date.now();
    const elapsed = getDeltaTime(now, loopState.last);
    const totalElapsed = loopState.totalElapsed + elapsed;
    const fps = loopState.aFrameCount / totalElapsed; 

    if (!loopState.paused) {  
      for (const [callbackId, callback] of loopState.callbacks) {
        callback(fps, elapsed, totalElapsed, loopState.vFrameCount, loopState.aFrameCount);
      }
    }

    loopState.aFrameCount++;
    if (fps) {
      loopState.vFrameCount += Math.round(TARGET_FPS / fps);
    }
    loopState.totalElapsed = totalElapsed;
    loopState.lastAnimationFrameId = requestAnimationFrame(loop);
    loopState.last = now; // should it be Date.now()?
  }

  loop();

  return function (id, cb) {
    loopState.callbacks.set(id, cb);
  };
}
