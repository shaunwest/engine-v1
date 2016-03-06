// NOTE: this isn't going to work.
// the full diff list will need to be passed to all patch operations
// still would like the ability to "delegate" operations on the data
// structure to different functions in a clear way

// patch = object + key + newValue
// diff = object + key + oldValue

/*
export default (dataRef, keyOrIndex, value, diffs) => {
  diff.dataRef = dataRef;
  diff.keyOrIndex = keyOrIndex;
  diff.newValue = value;
 
  if (typeof keyOrIndex !== 'undefined') { 
    diff.oldValue = dataRef[keyOrIndex];
    dataRef[keyOrIndex] = value;
  }

  return diff;
};
*/

export default (data, diffs, keyOrIndex, newValue) => {
  const oldValue = data[keyOrIndex];

  if (typeof oldValue === 'object') throw 'Error, new value must not be object';

  diffs.push(data, keyOrIndex, newValue, oldValue);
  data[keyOrIndex] = newValue;
  return 4;
};
