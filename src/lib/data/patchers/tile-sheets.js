import { RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE } from '../actions/tile-sheets.js';
import { subscribe } from '../store.js';

export default () => {
  subscribe(RECEIVED_TILE_SHEET, (store, tileSheetData) => {
    const tileSheets = Object.assign({}, store.immutable.tileSheets, { [tileSheetData.id]: tileSheetData });
    return Object.assign({}, store.immutable, { tileSheets });
  });

  subscribe(RECEIVED_TILE_SHEET_IMAGE, (store, src, tileSheetImage) =>
    Object.assign(store.mutable, { tileSheetImages: { [src]: tileSheetImage } }));
}
