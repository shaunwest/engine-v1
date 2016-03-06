// given level data and keyboard/mouse input, compute the locations (and animation states)
// of the view, sprites, and backgrounds.
//import dataStore from './data/store.js';
//import patcher from './data/patcher.js';

/*
import dispatcher from './data/dispatcher.js';
import { increment, decrement } from './data/counter-actions.js';


let dataStore = dispatcher(increment);
console.log(dataStore.counts.count1);

dataStore = dispatcher(increment);
console.log(dataStore.counts.count1);

//patcher.undo();
//console.log(dataStore.counts.count1);
*/

import { create, increment, decrement } from './data/counter-actions.js';
import rootPatcher from './data/root.js';
import createDispatcher from './data/flow/create-dispatcher.js';
import undo from  './data/flow/undo.js';
import redo from './data/flow/redo.js';

const INIT = 'INIT';
const initData = dispatch => dispatch(INIT, () => ({
  foo: 'bar'
  /*counts: { 
    count1: 0,
    count2: 0
  }*/
}));

const dataStore = {
  data: {},
  diffs: [],
  diffPosition: 0
};

const dispatcher = createDispatcher(rootPatcher, dataStore);

dispatcher(initData);
console.log(dataStore.data);

dispatcher(create);
console.log(dataStore.data);

dispatcher(increment);
console.log(dataStore.data.counts.count1);

dispatcher(increment);
console.log(dataStore.data.counts.count1);

dispatcher(decrement);
console.log(dataStore.data.counts.count1);

undo(dataStore);
console.log(dataStore.data.counts.count1);

undo(dataStore);
console.log(dataStore.data.counts.count1);

undo(dataStore);
console.log(dataStore.data.counts.count1);

undo(dataStore);
console.log(dataStore.data);

redo(dataStore);
console.log(dataStore.data);

redo(dataStore);
console.log(dataStore.data);

redo(dataStore);
console.log(dataStore.data);

//console.log(dataStore.diffs, dataStore.diffPosition);

