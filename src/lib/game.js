import Looper from 'base-utils/looper.js';
import Inputer from 'base-utils/inputer.js';
import { compose } from 'base-utils/func.js';
import { maybe } from 'base-utils/functor';
import { subscribe } from './data/store';
import { getObject, getArray, releaseAll } from 'base-utils/pool';
import { SCENE_READY } from './data/actions/scene';
import { updateFrameTable } from './data/actions/frame-table.js';
import { mapFixed2dRegion } from './fixed-2d.js';

const TARGET_FPS = 60;

// Things to update: frameTable, entity positions, level state, stats/progress
// entity positions depend on: player actions, ai, collisions, physics
// playerLogic()
// handleCollisions
// viewportLogic depends on player

const updateAnimation = spriteData => {
  spriteData.currentAnimationId = 'idle';
  spriteData.currentFrameIndex = 0;
  return spriteData;
}

const updatePhysics = entity => entity;
const updateAi = entity => entity;
const updateCollisions = entity => entity;

const updateSegments = (segments, fn) => {
  const result = getArray();
  for (const segment of segments) {
    for (const spriteData of segment.value.values()) {
      result.push(fn(spriteData));
    }
  }
  return result;
}

/*
const getTileData = (tileIndex, x, y) => {
  const tileData = getObject();
  tileData.tileIndex = tileIndex;
  tileData.x = x;
  tileData.y = y; 
  return tileData;
}
*/

const updateTiles = (layer, viewport) => mapFixed2dRegion(layer, 512, viewport);

const updateSprites = (layer, viewport) => {
  // TODO: width and height calculation can happen once, somewhere else
  const region = {
    x: viewport.x / 128,
    y: viewport.y / 128,
    width: viewport.width / 128,
    height: viewport.height / 128
  }
  return updateSegments(mapFixed2dRegion(layer, 512 / 128, region), spriteData => 
    compose(updateAnimation, updateCollisions, updateAi, updatePhysics, spriteData));
}

const updateFactory = store => layerId => {
  if (store.getLayerData(layerId).layoutType === 'FIXED_2D') {
    updateFrameTable(store.getTileSheetId(layerId), TARGET_FPS); // side-effects...sigh
    return updateTiles(store.getLayer(layerId), store.getViewport());
  } else {
    return updateSprites(store.getLayer(layerId), store.getViewport());
  }
}

const renderTiles = (context, tiles, viewport, tileTable) => {
  for (const tileData of tiles) {
    if (tileData) { 
      const tile = tileTable[tileData.value];
      if (tile) {
        context.drawImage(tile, tileData.x * 16, tileData.y * 16);
      }
    }
  }
}

const renderSprites = (context, sprites, viewport, spriteAnimations) => {
  for (const sprite of sprites) {
    const animationSet = spriteAnimations[sprite.id];
    context.drawImage(
      animationSet[sprite.currentAnimationId][sprite.currentFrameIndex],
      sprite.x,
      sprite.y
    );
  }
}

const renderFactory = (store, context) => (layerId, entities) =>
  (store.getLayerData(layerId).layoutType === 'FIXED_2D') ?
    renderTiles(context, entities, store.getViewport(), store.getFrameTable()) :
    renderSprites(context, entities, store.getViewport(), store.getSpriteAnimations(layerId));

export default () => element => maybe(element, element =>
  subscribe(SCENE_READY, store => {
    const context = element.getContext('2d');
    const update = updateFactory(store);
    const render = renderFactory(store, context);

    Looper(store.mutable.loop)('GAME_LOOP', () => {
      context.clearRect(0, 0, 256, 240);

      Object.keys(store.immutable.scene.layers).forEach(layerId =>
        render(layerId, update(layerId)));

      releaseAll();
    })
  })
);
