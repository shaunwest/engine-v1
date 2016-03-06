
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';
export const INIT_COUNTS = 'INIT_COUNTS';

export const increment = dispatch => dispatch(INCREMENT_COUNT, add(1));
export const decrement = dispatch => dispatch(DECREMENT_COUNT, subtract(1));
export const create = dispatch => dispatch(INIT_COUNTS, init);

const init = state => ({
  counts: { 
    count1: 0,
    count2: 0
  }
});
const add = amount => state => state.counts.count1 + amount;
const subtract = amount => state => state.counts.count1 - amount;
