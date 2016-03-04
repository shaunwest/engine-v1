import { INCREMENT_COUNT, DECREMENT_COUNT } from './counter-actions.js';
import patcher from './patcher.js';

// counter()
export default (data, type, value) => {
  switch(type) {
    case INCREMENT_COUNT:
      patcher.patchValue(data, 'count1', value);
      break; 
    case DECREMENT_COUNT:
      patcher.patchValue(data, 'count1', value);
      break;
  }
};
