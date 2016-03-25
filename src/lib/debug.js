import { _objectPoolState } from 'base-utils/pool.js';

export default (fps, elapsed, totalElapsed, vFrameCount, aFrameCount, element) => 
  element.innerHTML = `
    FPS: ${ fps }<br />
    Elapsed: ${ elapsed }<br />
    Time: ${ totalElapsed }<br />
    vFrames: ${ vFrameCount }<br />
    aFrames: ${ aFrameCount }<br />
    ObjectPool: ${ _objectPoolState.length }<br />
  `;
