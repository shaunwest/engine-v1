import { INIT_INPUT } from '../actions/input';
import { subscribeMutable } from '../store';

export default () => {
  subscribeMutable(INIT_INPUT, (state, inputData) => state.input = inputData);
}
