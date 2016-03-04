import createDispatcher from './flow/create-dispatcher.js';
import dataStore from './store.js';
import root from './root.js';

export default createDispatcher(root, dataStore);
