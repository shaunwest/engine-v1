import { loopState } from './loop-state.js';
import Looper from './looper.js';

/*
export const sub = cb => pubs.push(cb);
const pubs = [];
const pub = (...args) => pubs.forEach(pub => pub.apply(null, args));
*/

export default function Engine(canvas) {
  if (!canvas) {
    console.error('A canvas instance is required');
    return;
  }
  const gameLoop = Looper(loopState);
  const context = canvas.getContext('2d');

  const update = (fps, elapsed, vFrameCount, aFrameCount) => {
    //pub(fps, elapsed, vFrameCount, aFrameCount);
    console.log('foo');
    context.clearRect(0, 0, 100, 101);
    context.beginPath();
    context.rect(0, 0, Math.floor(Math.random() * 100), 100);
    context.stroke();
    context.closePath();
  };

  gameLoop('GAME_LOOP1', update);
}
