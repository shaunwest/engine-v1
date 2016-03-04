import loopState from './state/_loop.js';
import Looper from './looper.js';
import Inputer from './inputer.js';
import { point } from './util/geom.js';
import { randomRects } from './demo.js';
import { objectPoolState } from './state/_pool.js';

const getInputLocation = (inputPosition, elementBounds) => 
  (inputPosition) ? 
    point(
      inputPosition.x - Math.floor(elementBounds.left),
      inputPosition.y - Math.floor(elementBounds.top)
    ) :
    null;

// process user input
const input = (elementBounds, getInput) => getInputLocation(getInput().position, elementBounds);

// combine game data with input, return sprites and associated render data
const logic = (dataStore, inputData) => {
  //console.log(inputData);
  return {};
}

// this is where we'll loop over sprite and background data
// and render to context
const render = (context, renderData) => randomRects(context);

const debug = (fps, elapsed, totalElapsed, vFrameCount, aFrameCount, element) => 
  element.innerHTML = `
    FPS: ${ fps }<br />
    Elapsed: ${ elapsed }<br />
    Time: ${ totalElapsed }<br />
    vFrames: ${ vFrameCount }<br />
    aFrames: ${ aFrameCount }<br />
    OPoolSize: ${ objectPoolState.length }<br />
  `;

export default function Engine(dataStore) {
  const mainLoop = Looper(loopState);

  return {
    contentRender: function (element) {
      if (!element || !element.getContext) return;

      const context = element.getContext('2d'),
        getInput = Inputer(element);

      mainLoop('GAME_LOOP', () =>
        render(context, logic(dataStore, input(element.getBoundingClientRect(), getInput))));
    },
    dataRender: function (element) {
      mainLoop('DATA_LOOP', (fps, elapsed, totalElapsed, vFrameCount, aFrameCount) =>
        debug(fps, elapsed, totalElapsed, vFrameCount, aFrameCount, element));
    }
  };
}
