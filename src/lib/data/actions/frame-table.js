import { _immutableStore, _mutableStore, publishMutable } from '../store.js';
import * as types from '../util/game-image-types.js'; 

export const INIT_FRAME_TABLE = 'INIT_FRAME_TABLE';
export const UPDATE_FRAME_TABLE = 'UPDATE_FRAME_TABLE';

export const initFrameTable = (frameTableData = []) => publishMutable(INIT_FRAME_TABLE, frameTableData);

export const updateFrameTable = (tileSheetId, targetFps) => {
  const gameImageDataSet = _immutableStore.state.tileSheets[tileSheetId].tiles;
  const gameImageSet = _mutableStore.state.animations[tileSheetId];
  const frameCount = _mutableStore.state.loop.aFrameCount;
  const numGameImages = (gameImageDataSet) ? gameImageDataSet.length : 0;

  for (let i = 0; i < numGameImages; i++) {
    const type = gameImageDataSet[i].type || 'basic';

    publishMutable(UPDATE_FRAME_TABLE, i, types[type](
      gameImageDataSet[i].frames,
      gameImageSet[i],
      targetFps,
      frameCount
    ));
  }
}
