import { RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE } from '../actions/tile-sheets.js';
import { subscribeImmutable, subscribeMutable } from '../store.js';

export default () => {
  subscribeImmutable(RECEIVED_TILE_SHEET, (state, tileSheetData) => {
    const tileSheets = Object.assign({}, state.tileSheets, { [tileSheetData.id]: tileSheetData });
    return Object.assign({}, state, { tileSheets });
  });

  subscribeMutable(RECEIVED_TILE_SHEET_IMAGE, (state, src, tileSheetImage) =>
    Object.assign(state, { tileSheetImages: { [src]: tileSheetImage } }));
}
