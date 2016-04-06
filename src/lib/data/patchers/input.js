import { INIT_INPUT } from '../actions/input';
import { subscribe } from '../store';

export default () => {
  subscribe(INIT_INPUT, (store, inputData) => store.mutable.input = inputData);
}
