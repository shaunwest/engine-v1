import { INIT_FRAME_TABLE, UPDATE_FRAME_TABLE } from '../actions/frame-table.js';
import { subscribeMutable } from '../store.js';

export default () => {
  subscribeMutable(INIT_FRAME_TABLE, (state, frameTableData) => state.frameTable = frameTableData);
  subscribeMutable(UPDATE_FRAME_TABLE, (state, imageIndex, image) =>
    state.frameTable[imageIndex] = image);
}
