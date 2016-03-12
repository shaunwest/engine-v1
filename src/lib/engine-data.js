// given level data and keyboard/mouse input, compute the locations (and animation states)
// of the view, sprites, and backgrounds.

/*
import { createDispatcher, createDataStore } from 'flow-wip';
import undo from 'flow-wip/undo.js';

import level from './data/patchers/level.js';
*/

import { createDataStore } from 'flow-wip';
//import { levelHandler } from './data/patchers/level.js';
import { RECEIVED_LEVEL, fetchLevel } from './data/actions/level.js';
import { RECEIVED_TILE_SHEET, RECEIVED_TILE_SHEET_IMAGE } from './data/actions/tile-sheets.js';
import { subscribe } from './util/pubsub.js';

/*
const createDispatch = (rootHandler, dataStore) => {
  const dispatch = (action, ...values) =>{
    if (typeof action === 'function') {
      return action(dispatch);
    } else {
      const fn = rootHandler[action];
      if (fn) {
        dataStore.data = fn(dataStore.data, ...values);
      }
      return dataStore.data;
    }
  }

  return dispatch;
}
*/

/* GAHBAGE!
const createDispatch = (rootHandler, dataStore) => {
  const dispatch = (action, ...next) =>{
    if (typeof action === 'function') {
      return action(dispatch);
    } else {
      dataStore.data = action(dataStore.data, ...values);
      return dataStore.data;
    }
  }

  return dispatch;
}

const createDispatch = dataStore => ({
  dataStore.data = action(dataStore.data, ...values);
  return dataStore.data;
}
const createAsync = dispatch => action => action(dispatch);
*/


//const dataStore = createDataStore();
//const levelHandler = createLevelHandler(dataStore);
const dataStore = {
  data: {}
};
//const dispatch = createDispatch(levelHandler, dataStore);

//const dispatch = createDispatch(dataStore);


subscribe(RECEIVED_LEVEL, level => console.log(level));
subscribe(RECEIVED_TILE_SHEET, tileSheet => console.log(tileSheet));
subscribe(RECEIVED_TILE_SHEET_IMAGE, tileSheetImage => console.log(tileSheetImage));

fetchLevel('http://localhost:3000/data/kitty-world.json');

// don't really know how to handle patching...
// other than duck typing
// or a "patch" is always returned, even
// in cases where it's an entirely new object
// e.g. patchImmutable(newObj)
// the patch "diff" is appended to history
/*const createDispatch = dataStore =>
  (fn, ...args) => {
    args.unshift(dataStore.data);
    dataStore.data = fn.call(null, args);
  };
*/

/* useless?
const createAsync = dispatch => {
  const async = (fn, ...args) => { 
    args.unshift(dispatch, async);
    fn.call(null, args);
  }
}
*/


