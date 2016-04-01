// TODO: merge nonSerializable into mutable

import { createDataStore, createSub, createPub } from 'base-utils/data-store.js';

export const _immutableStore = createDataStore();
export const _mutableStore = createDataStore(false);

if (global) {
  global.immutableStore = _immutableStore;
  global.mutableStore = _mutableStore;
} else {
  window.immutableStore = _immutableStore;
  window.mutableStore = _mutableStore;
}

export const subscribeImmutable = createSub(_immutableStore);
export const publishImmutable = createPub(_immutableStore);

export const subscribeMutable = createSub(_mutableStore);
export const publishMutable = createPub(_mutableStore);
