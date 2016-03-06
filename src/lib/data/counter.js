import { INIT_COUNTS, INCREMENT_COUNT, DECREMENT_COUNT } from './counter-actions.js';
//import patcher from './patcher.js';
import patchValue from './flow/patch-value.js';
import patchObject from './flow/patch-object.js';

// counter()
export default (data, diffs, type, value) => {
  switch(type) {
    case INIT_COUNTS:
      return patchObject(data, diffs, value);
    case INCREMENT_COUNT:
      return patchValue(data, diffs, 'count1', value);
    case DECREMENT_COUNT:
      return patchValue(data, diffs, 'count1', value);
  }
};
