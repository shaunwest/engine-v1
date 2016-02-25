/**
 * Created by shaunwest on 6/20/15.
 */

// FIXME: if the loop is suspended, totalElapsed will
// grow out of sync with aFrameCount

export const TARGET_FPS = 60;
const MS_PER_SECOND = 1000;

const noop = function () {};
const requestAnimationFrame = global.requestAnimationFrame || noop;
const cancelAnimationFrame = global.cancelAnimationFrame || noop;
const getDeltaTime = (now, lastUpdateTime) => (now - lastUpdateTime) / MS_PER_SECOND;

let foo;
let blah;
let asdfafsd;

export default function Looper(loopState) {
  if (loopState.lastAnimationFrameId) {
    cancelAnimationFrame(loopState.lastAnimationFrameId);
  }
  const start = Date.now();
  loopState.last = start;
  
  function loop() {
    const now = Date.now();
    const totalElapsed = getDeltaTime(now, start);
    const elapsed = getDeltaTime(now, loopState.last);
    const fps = loopState.aFrameCount / totalElapsed; 

    if (!loopState.paused) {  
      for (const [callbackId, callback] of loopState.callbacks) {
        const result = callback(fps, elapsed, loopState.vFrameCount, loopState.aFrameCount);
        if (typeof result !== 'undefined') {
          loopState.callbacks.delete(callbackId);
        }
      }
    }

    loopState.aFrameCount++;

    if (fps) {
      loopState.vFrameCount += Math.round(TARGET_FPS / fps);
    }
    loopState.last = Date.now();

    //if (loopState.active) {
    loopState.lastAnimationFrameId = requestAnimationFrame(loop);
    //}
  }

  //if (!loopState.active) {
  //  loopState.active = true;
    loop();
  //}

  return function (id, cb) {
    loopState.callbacks.set(id, cb);
  };
}
