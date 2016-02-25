// WARNING: if using hot reloading, a change to this 
// file may cause looper to run multiple loops at once.
// Always refresh the entire app when making a change
// to this file.

export const loopState = {
  active: false,
  paused: false,
  callbacks: new Map(),
  last: 0, 
  fps: 0,
  vFrameCount: 0,
  aFrameCount: 0,
  lastAnimationFrameId: null
};
