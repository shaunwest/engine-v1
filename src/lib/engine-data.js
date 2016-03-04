// given level data and keyboard/mouse input, compute the locations (and animation states)
// of the view, sprites, and backgrounds.
import dataStore from './data/store.js';
import dispatcher from './data/dispatcher.js';
import patcher from './data/patcher.js';
import { increment, decrement } from './data/counter-actions.js';

dispatcher(increment);
console.log(dataStore.counts.count1);

dispatcher(increment);
console.log(dataStore.counts.count1);

patcher.undo();
console.log(dataStore.counts.count1);
