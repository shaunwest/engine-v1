import { createDataStore, createSub, createPub } from '../util/data-store.js';

export const _immutableDataStore = createDataStore();
export const _mutableDataStore = createDataStore(false);
export const _nonSerializableDataStore = createDataStore(false);

if (global) {
  global.immutableDataStore = _immutableDataStore;
  global.mutableDataStore = _mutableDataStore;
  global.nonSerializableDataStore = _nonSerializableDataStore;
} else {
  window.immutableDataStore = _immutableDataStore;
  window.mutableDataStore = _mutableDataStore;
  window.nonSerializableDataStore = _nonSerializableDataStore;
}

export const subscribeImmutable = createSub(_immutableDataStore);
export const publishImmutable = createPub(_immutableDataStore);

export const subscribeMutable = createSub(_mutableDataStore);
export const publishMutable = createPub(_mutableDataStore);

export const subscribeNonSerializable = createSub(_nonSerializableDataStore);
export const publishNonSerializable = createPub(_nonSerializableDataStore);

//export const subscribeNonSerializable = createNonSerializableSub(_dataStore);

