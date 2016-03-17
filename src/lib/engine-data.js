// given level data and keyboard/mouse input, compute the locations (and animation states)
// of the view, sprites, and backgrounds.
import { RECEIVED_LEVEL, fetchLevel } from './data/actions/level.js';
import { RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE,
  fetchTileSheetData, fetchTileSheetImage } from './data/actions/tile-sheets.js';
import { subscribeImmutable, subscribeNonSerializable } from './state/_data-store.js';

subscribeImmutable(RECEIVED_LEVEL, (state, level) =>
  Object.assign({}, state, { level }));

subscribeImmutable(RECEIVED_TILE_SHEET, (state, tileSheetData) =>
  Object.assign({}, state, { tileSheets: { [tileSheetData.id]: tileSheetData } }));

subscribeNonSerializable(RECEIVED_TILE_SHEET_IMAGE, (state, src, tileSheetImage) =>
  Object.assign(state, { tileSheetImages: { [src]: tileSheetImage } }));


fetchLevel('http://localhost:3000/data/kitty-world.json')
  .then(json =>
    fetchTileSheetData(json.layers.background.tileSheet + '.json')
      .then(json => fetchTileSheetImage(json.src)));
