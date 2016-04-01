import { INIT_VIEWPORT } from '../actions/viewport';
import { subscribeMutable } from '../store.js';

export default () => {
  subscribeMutable(INIT_VIEWPORT, (state, viewportData) => state.viewport = viewportData);
}
