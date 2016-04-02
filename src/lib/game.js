import Looper from 'base-utils/looper.js';
import Inputer from 'base-utils/inputer.js';
import { maybe } from 'base-utils/functor';
import debug from './debug';
import { randomRects } from './demo';
import { subscribeMutable, _immutableStore } from './data/store';
import { SCENE_READY } from './data/actions/scene';
import { updateFrameTable } from './data/actions/frame-table.js';
import visualizer from './data/visualizer';
import { mapFixed2dRegion } from './fixed-2d.js';

const TARGET_FPS = 60;

const getKeys = getInput => getInput().keysPressed;

// combine game data with input, return sprites and associated render data
const logic = (state, keys) => {
  // playerLogic()
  // handleCollisions
  // viewportLogic()
  return {};
}

// this is where we'll loop over sprite and background data
// and render to context
const render = (context, renderData) => randomRects(context);

const renderFixed2d = (context, layer, viewport, tileTable) =>
  mapFixed2dRegion(layer, 512, viewport, (x, y, tileIndex) => {
    const tile = tileTable[tileIndex];
    if (tile) context.drawImage(tile, x * 16, y * 16);
  });

const renderFree2d = (context, layer, viewport) => {
  mapFixed2dRegion(layer, 512, viewport, (segmentX, segmentY, segment) => {
  });
}

// Things to update: frameTable, entity positions, level state, stats/progress
const updateData = () => updateFrameTable('smb-tiles', TARGET_FPS);

export default () => element => maybe(element, element =>
  subscribeMutable(SCENE_READY, state => {
    Looper(state.loop)('GAME_LOOP', () => {
      const context = element.getContext('2d');
      context.clearRect(0, 0, 246, 240);
      updateData();
      renderFixed2d(context, state.layers.background, state.viewport, state.frameTable);
      /*render(
        element.getContext('2d'),
        logic(
          state, 
          getKeys(Inputer(state.input, element))
        )
      )*/
    })
  })
);
