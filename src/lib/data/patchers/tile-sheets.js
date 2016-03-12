import { RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE } from '../actions/tile-sheets.js';

/*
export default (data, type, value, diffs) => {
  switch(type) {
    case RECEIVED_TILE_SHEET:
  }
};
*/

/*
export const tileSheetsHandler = {
  [RECEIVED_TILE_SHEET]: (data, tileSheetData) => {
    return Object.assign({
      tileSheet: { 
        'demo-tiles': tileSheetData
      }
    }, data);
  },
  [RECEIVED_TILE_SHEET_IMAGE]: (data, tileSheetImage) => {
    return Object.assign({
      tileSheetImage: tileSheetImage
    }, data);
  }
};
*/

export const receivedTileSheet = (data, tileSheetData) =>
  Object.assign({}, data, {
    tileSheet: { 
      'demo-tiles': tileSheetData
    }
  });

export const receivedTileSheetImage = (data, tileSheetImage) =>
  Object.assign({}, data, { 
    tileSheetImage
  });
