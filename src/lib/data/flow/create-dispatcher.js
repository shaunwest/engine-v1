// createDispatcher

export default (rootPatcher, dataStore) =>
  action =>
    action((type, modifier) => 
      dataStore.diffPosition += rootPatcher(dataStore.data, dataStore.diffs, type, modifier(dataStore.data)));

/*
export default (reducer) => {
  return (action, dataStore) => { 
    return (action) ? 
      action((type, modifier) => {
        return reducer(dataStore, type, modifier(dataStore));
      }) :
      reducer(dataStore);
  }
};
*/

/*
export default (reducer) => {
  const diffs = [];
  let dataStore;

  return action => { 
    const diff = (action) ? 
      action((type, modifier) => {
        const diff = reducer(dataStore, type, modifier(dataStore));
        diffs.push(diff);
        return diff;
      }) :
      reducer(dataStore);

    if (typeof diff.keyOrIndex === 'undefined') {
      dataStore = diff.dataRef;
    }

    return dataStore;
  }
};
*/
