import Looper from 'base-utils/looper.js';
import Inputer from 'base-utils/inputer.js';
import { compose } from 'base-utils/func.js';
import { maybe } from 'base-utils/functor';
import { subscribe, getKeys, getLayerData, getLayer, 
  getViewport, getFrameTable, getTileSheetId } from './data/store';
import { SCENE_READY } from './data/actions/scene';
import { updateFrameTable } from './data/actions/frame-table.js';
import { mapFixed2dRegion } from './fixed-2d.js';

const TARGET_FPS = 60;

/*
const getKeys = getInput => getInput().keysPressed;
const getLayerData = (store, layerId) => store.immutable.scene.layers[layerId];
const getLayer = (store, layerId) => store.mutable.layers[layerId];
const getViewport = store => store.mutable.viewport;
const getFrameTable = store => store.mutable.frameTable;
const getTileSheetId = (store, layerId) => store.immutable.scene.layers[layerId].tileSheet;
*/

getKeys, getLayerData, getLayer, getViewport, getFrameTable, getTileSheetId


// Things to update: frameTable, entity positions, level state, stats/progress
// entity positions depend on: player actions, ai, collisions, physics
// playerLogic()
// handleCollisions
// viewportLogic depends on player

const updatePhysics = entity => entity;
const updateAi = entity => entity;
const updateCollisions = entity => entity;

const updateTiles = tileSetId => updateFrameTable(tileSetId, TARGET_FPS);

const updateSprites = (layer, viewport) =>
  mapFixed2dRegion(layer, 512, viewport, sprites =>
    compose(updateCollisions, updateAi, updatePhysics, sprites));

const updateFactory = store => () =>
  Object.keys(store.immutable.scene.layers).forEach(layerId =>
    (getLayerData(layerId).layoutType === 'FIXED_2D') ?
      updateTiles(getTileSheetId(layerId), getViewport()) :
      updateSprites(getLayer(layerId), getViewport()));

const renderTiles = (context, layer, viewport, tileTable) =>
  mapFixed2dRegion(layer, 512, viewport, (tileIndex, x, y) => {
    const tile = tileTable[tileIndex];
    if (tile) context.drawImage(tile, x * 16, y * 16);
  });

const renderSprites = (context, sprites, viewport) => {
}

const renderFactory = (store, context) => () => {
  context.clearRect(0, 0, 256, 240);
  Object.keys(store.immutable.scene.layers).forEach(layerId =>
    (getLayerData(layerId).layoutType === 'FIXED_2D') ?
      renderTiles(context, getLayer(layerId), getViewport(), getFrameTable()) :
      renderSprites(context));
}

export default () => element => maybe(element, element =>
  subscribe(SCENE_READY, store => {
    const update = updateFactory(store);
    const render = renderFactory(store, element.getContext('2d'));

    Looper(store.mutable.loop)('GAME_LOOP', () => {
      update();
      render();
    })
  })
);
