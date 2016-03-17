/*export const createDataStore = () => ({
  state: {
    mutable: {},
    immutable: {},
    nonSerializable: {}
  },
  topics: {
    mutable: {}, 
    immutable: {},
    nonSerializable: {}
  }
});
*/

export const createDataStore = (immutable = true) => ({
  state: {},
  topics: {},
  immutable
});

export const createSub = _dataStore => 
  (topic, fn) =>
    _dataStore.topics = Object.assign(
      {},
      _dataStore.topics,
      {
        [topic]: [fn, ...(_dataStore.topics[topic] || [])]
      }
    );

const saveImmutable = (topic, topics, dataStore, values) => {
  if (topic in topics) {
    for (let fn of topics[topic])
      dataStore.state = fn.call(null, dataStore.state, ...values);
    return true;
  }
  return false;
}

const saveMutable = (topic, topics, state, values) => {
  if (topic in topics) {
    for (let fn of topics[topic])
      fn.call(null, state, ...values);
    return true;
  }
  return false;
}

export const createPub = _dataStore =>
  (topic, ...values) =>
    _dataStore.immutable ?
      saveImmutable(topic, _dataStore.topics, _dataStore, values) :
      saveMutable(topic, _dataStore.topics, _dataStore.state, values); 

/*
const createSub = type => 
  _dataStore => 
    (topic, fn) =>
      _dataStore.topics[type] = Object.assign(
        {},
        _dataStore.topics[type],
        {
          [topic]: [fn, ...(_dataStore.topics[type][topic] || [])]
        }
      );

export const createImmutableSub = createSub('immutable');
export const createMutableSub = createSub('mutable');
export const createNonSerializableSub = createSub('nonSerializable');

const saveImmutable = (topic, topics, state, values) => {
  if (topic in topics) {
    for (let fn of topics[topic])
      state.immutable = fn.call(null, state.immutable, ...values);
    return true;
  }
  return false;
}

const saveMutable = (topic, topics, mutableState, values) => {
  if (topic in topics) {
    for (let fn of topics[topic])
      fn.call(null, mutableState, ...values);
    return true;
  }
  return false;
}

export const createPub = _dataStore =>
  (topic, ...values) =>
    saveImmutable(topic, _dataStore.topics.immutable, _dataStore.state, values) ||
    saveMutable(topic, _dataStore.topics.mutable, _dataStore.state.mutable, values); 
*/
