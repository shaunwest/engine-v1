import { RECEIVED_LEVEL, RECEIVED_LEVEL_ERROR } from '../actions/level.js';
import patchValue from '../flow/patch-value.js';

export default (data, type, value) => {
  switch(type) {
    case RECEIVED_LEVEL:
      return patchValue(data, 'count1', value);
  }
};
