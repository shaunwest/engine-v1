import Looper from 'base-utils/looper.js';
import Inputer from 'base-utils/inputer.js';
import { point } from 'base-utils/geom';
import { maybe } from 'base-utils/functor';
import debug from './debug';
import { randomRects } from './demo';
import { subscribeMutable } from './data/store';
import { SCENE_READY } from './data/actions/scene';
import { updateFrameTable } from './data/actions/frame-table.js';
import visualizer from './data/visualizer';

const TARGET_FPS = 60;

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
const logic = (state, inputData) => {
  //console.log(inputData);
  return {};
}

// this is where we'll loop over sprite and background data
// and render to context
const render = (context, renderData) => randomRects(context);

// Things to update: frameTable, viewport, entity positions, level state, stats/progress
const updateData = () => updateFrameTable('smb-tiles', TARGET_FPS);

export default () => element => maybe(element, element =>
  subscribeMutable(SCENE_READY, state =>
    Looper(state.loop)('GAME_LOOP', () => {
      updateData();
      render(
        element.getContext('2d'),
        logic(
          state, 
          input(element.getBoundingClientRect(), Inputer(state.input, element))
        )
      )
    })
  )
);
