import loopState from './loop-state.js';
import Looper from './looper.js';
import Inputer from './inputer.js';
import { ObjectPool } from './pool.js';
import { point } from './util/geom.js';

function getElementLocation(element) {
  const bounds = element.getBoundingClientRect();
  return {
    x: Math.floor(bounds.left),
    y: Math.floor(bounds.top)
  };
}

function getInputLocation(clientX, clientY, element) {
  const elementLocation = getElementLocation(element);
  return point(clientX - elementLocation.x, clientY - elementLocation.y);
}

// this is where we'll loop over sprite and background data
// and render to context
const render = (context, data, getInput) => {
  const input = getInput();

  context.beginPath();
  context.rect(0, 0, 200, 200);
  context.fillStyle = "grey";
  context.fill();
  context.rect(
    Math.floor(Math.random() * 200),
    Math.floor(Math.random() * 200),
    Math.floor(Math.random() * 64),
    Math.floor(Math.random() * 64)
  );
  context.stroke();
  context.closePath();

  console.log(input.isPressed);
}

export default function Engine(data) {
  const mainLoop = Looper(loopState),
    objectPool = ObjectPool();

  return {
    contentRender: function (element) {
      if (!element || !element.getContext) return;

      const context = element.getContext('2d'),
        getInput = Inputer(element);

      mainLoop('GAME_LOOP', () => render(context, data, getInput));
    },
    dataRender: function (element) {
      const update = (fps, elapsed, totalElapsed, vFrameCount, aFrameCount) => {
        element.innerHTML = `
          FPS: ${ fps }<br />
          Elapsed: ${ elapsed }<br />
          Time: ${ totalElapsed }<br />
          vFrames: ${ vFrameCount }<br />
          aFrames: ${ aFrameCount }<br />
        `;
      };

      mainLoop('DATA_LOOP', update);
    }
  };
}
