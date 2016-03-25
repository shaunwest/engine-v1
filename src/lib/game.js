import Looper from 'base-utils/looper.js';
import Inputer from 'base-utils/inputer.js';
import { point } from 'base-utils/geom';
import { maybe } from 'base-utils/functor';
import inputState from './state/_input';
import debug from './debug';
import { randomRects } from './demo';
import { initAndFetch } from './data/data';
import { _immutableStore, _nonSerializableStore, _mutableStore, subscribeImmutable } from './data/store';
import { LEVEL_READY } from './data/actions/level';
import { updateFrameTable } from './data/actions/frame-table.js';
//import { updateFrameTable } from './game-image-types';
import visualizer from './data/visualizer';

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
const logic = (data, inputData) => {
  //console.log(inputData);
  return {};
}

// this is where we'll loop over sprite and background data
// and render to context
const render = (context, renderData) => randomRects(context);

// need a better way to handle incomplete data
const updateData = () => {
  if (_immutableStore.state.tileSheets && 
    _immutableStore.state.tileSheets['smb-tiles'] &&
    _nonSerializableStore.state.animations['smb-tiles']) {
    updateFrameTable(
      //_mutableStore.state.frameTable,
      _immutableStore.state.tileSheets['smb-tiles'].tiles,
      _nonSerializableStore.state.animations['smb-tiles'],
      60,
      _mutableStore.state.loop.aFrameCount
    );
  }
};

export default () => {
  initAndFetch();

  const mainLoop = Looper(_mutableStore.state.loop);

  const contentRender = element => maybe(element, element =>
    mainLoop('GAME_LOOP', () =>
      render(
        element.getContext('2d'),
        logic(
          updateData(),
          input(element.getBoundingClientRect(), Inputer(inputState, element))
        )
      )
    )
  );

  /*
  const dataRender = element => maybe(element, element =>
    mainLoop('DATA_LOOP', (fps, elapsed, totalElapsed, vFrameCount, aFrameCount) =>
      debug(fps, elapsed, totalElapsed, vFrameCount, aFrameCount, element)
    )
  );
  */
  const dataRender = element => maybe(element, element =>
    setInterval(() =>
      element.innerHTML = visualizer(_mutableStore.state).innerHTML
    , 200)
  );

  return { contentRender, dataRender };
}
