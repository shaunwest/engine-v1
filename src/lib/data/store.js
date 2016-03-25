import { createDataStore, createSub, createPub } from 'base-utils/data-store.js';

export const _immutableStore = createDataStore();
export const _mutableStore = createDataStore(false);
export const _nonSerializableStore = createDataStore(false);

if (global) {
  global.immutableStore = _immutableStore;
  global.mutableStore = _mutableStore;
  global.nonSerializableStore = _nonSerializableStore;
} else {
  window.immutableStore = _immutableStore;
  window.mutableStore = _mutableStore;
  window.nonSerializableStore = _nonSerializableStore;
}

export const subscribeImmutable = createSub(_immutableStore);
export const publishImmutable = createPub(_immutableStore);

export const subscribeMutable = createSub(_mutableStore);
export const publishMutable = createPub(_mutableStore);

export const subscribeNonSerializable = createSub(_nonSerializableStore);
export const publishNonSerializable = createPub(_nonSerializableStore);
