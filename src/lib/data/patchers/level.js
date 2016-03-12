import { RECEIVED_LEVEL, RECEIVED_LEVEL_ERROR } from '../actions/level.js';
import { RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE } from '../actions/tile-sheets.js';
import { tileSheetsHandler } from './tile-sheets.js';
//import patchObject from 'flow-wip/patch-object.js';

/*
export default (data, type, value, diffs) => {
  switch(type) {
    case RECEIVED_LEVEL:
      return patchObject(data, diffs, value);
  }
};
*/

/*
export default (data, type, value) => {
  switch(type) {
    case RECEIVED_LEVEL:
      console.log('received level', value);
  }
};
*/


export const receivedLevel = (data, level) => Object.assign({}, level);


/*
export const levelHandler = {
  [RECEIVED_LEVEL]: (data, level) => Object.assign({}, level),
  [RECEIVED_TILE_SHEET]: (data, tileSheet) => tileSheetsHandler[RECEIVED_TILE_SHEET](data, tileSheet),
  [RECEIVED_TILE_SHEET_IMAGE]: (data, tileSheetImage) => tileSheetsHandler[RECEIVED_TILE_SHEET_IMAGE](data, tileSheetImage)
};
*/

/*
const levelHandler = makeHandler(
  RECEIVED_LEVEL, (data, level) => {},
  RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE, (data, value) => {}
);
*/
