import { RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE } from '../actions/tile-sheets.js';
import { subscribeImmutable, subscribeNonSerializable } from '../store.js';

export default () => {
  subscribeImmutable(RECEIVED_TILE_SHEET, (state, tileSheetData) =>
    Object.assign({}, state, { tileSheets: { [tileSheetData.id]: tileSheetData } }));

  subscribeNonSerializable(RECEIVED_TILE_SHEET_IMAGE, (state, src, tileSheetImage) =>
    Object.assign(state, { tileSheetImages: { [src]: tileSheetImage } }));


}
