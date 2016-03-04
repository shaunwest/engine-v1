import counter from './counter.js';
import { INCREMENT_COUNT, DECREMENT_COUNT } from './counter-actions.js';

// root 'reducer'
export default (data, type, value) => {
  switch(type) {
    case INCREMENT_COUNT:
    case DECREMENT_COUNT:
      counter(data.counts, type, value);
      break;
  }
};
