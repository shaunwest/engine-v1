
const clear = (obj) => {
  for(const prop in obj) delete obj[prop];
};

/*
export default (dataStore) => {
  const diffs = dataStore.diffs,
    diffPosition = dataStore.diffPosition - 1,
    patchType = diffs[diffPosition];

  switch (patchType) {
    case 'val':
      dataStore.diffPosition = undoValue(diffs, diffPosition);
      return;
    case 'obj':
      dataStore.diffPosition = undoObject(diffs, diffPosition);
      return;
  }
};
*/

export default (dataStore) => {
  dataStore.diffPosition = undoValue(dataStore.diffs, dataStore.diffPosition);
};


const undoValue = (diffs, p) => {
  const oldValue = diffs[--p],
    newValue = diffs[--p],
    key = diffs[--p],
    data = diffs[--p];

  if (key) {
    data[key] = oldValue;
  } 
  else {
    clear(data);
    Object.assign(data, oldValue);
  }

  return p;
};

/*
const undoObject = (diffs, p) => {
  const oldObj = diffs[--p],
    newObj = diffs[--p],
    dataRef = diffs[--p];

  clear(dataRef);

  Object.assign(dataRef, oldObj);

  return p;
};
*/
