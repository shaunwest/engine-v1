import { INIT_VIEWPORT } from '../actions/viewport';
import { subscribe } from '../store.js';

export default () => {
  subscribe(INIT_VIEWPORT, (store, viewportData) => store.mutable.viewport = viewportData);
}
