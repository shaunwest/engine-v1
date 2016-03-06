import createDispatcher from './flow/create-dispatcher.js';
//import dataStore from './store.js';
import root from './root.js';

const diffs = [];
const dispatcher = createDispatcher(root);

let dataStore;

const dispatcherWrapper = (action) => {
  const diff = dispatcher(action, dataStore);
  if (typeof diff.keyOrIndex === 'undefined') {
    dataStore = diff.dataRef;
  }
  diffs.push(diff);
  return dataStore;
}

dispatcherWrapper();

export default dispatcherWrapper;
