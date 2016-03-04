// createDispatcher
export default (reducer, dataStore) => 
  dispatcher => 
    dispatcher((type, action) => 
      reducer(dataStore, type, action(dataStore)));
