
/*
const diff = {};

function clear(obj) {
  for(const prop in obj) delete obj[prop];
}

export default (dataRef, parentKey) => {
  clear(diff);

  diff.dataRef = dataRef;

  if (typeof parentKey !== 'undefined') { 
    diff.keyOrIndex = parentKey;
  }

  return diff;
};
*/

const clone = obj => JSON.parse(JSON.stringify(obj));


// hmmm, works so far... what about when an object patch happens
// in the middle of the diff sequence?
export default (data, diffs, newObj) => {
  const oldData = data, //clone(data),
    newData = newObj; //clone(newObj); 
  Object.assign(data, newObj);
  diffs.push(data, '', newData, oldData);

  return 4;
};

