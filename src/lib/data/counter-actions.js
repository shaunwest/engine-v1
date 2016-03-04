
export const INCREMENT_COUNT = 'INCREMENT_COUNT';
export const DECREMENT_COUNT = 'DECREMENT_COUNT';

export const increment = dispatch => dispatch(INCREMENT_COUNT, add(1));
export const decrement = dispatch => dispatch(DECREMENT_COUNT, subtract(1));

const add = amount => state => state.counts.count1 + amount;
const subtract = amount => state => state.counts.count1 - amount;
