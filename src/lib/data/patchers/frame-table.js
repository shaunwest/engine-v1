import { INIT_FRAME_TABLE, UPDATE_FRAME_TABLE } from '../actions/frame-table.js';
import { subscribe } from '../store.js';

export default () => {
  subscribe(INIT_FRAME_TABLE, (store, frameTableData) => store.mutable.frameTable = frameTableData);
  subscribe(UPDATE_FRAME_TABLE, (store, imageIndex, image) =>
    store.mutable.frameTable[imageIndex] = image);
}
