import counter from './counter.js';
import { INIT_COUNTS, INCREMENT_COUNT, DECREMENT_COUNT } from './counter-actions.js';
import patchValue from './flow/patch-value.js';
import patchObject from './flow/patch-object.js';

/*
const defaultData = {
  foo: 'bar', 
  counts: { 
    count1: 0,
    count2: 0
  }
};
*/

const INIT = 'INIT';
// root 'reducer'
export default (data, diffs, type, value) => {
  switch(type) {
    case INCREMENT_COUNT:
    case DECREMENT_COUNT:
      return counter(data.counts, diffs, type, value);
    case INIT_COUNTS:
      return counter(data, diffs, type, value);
    case INIT:
      return patchObject(data, diffs, value);
  }
};
