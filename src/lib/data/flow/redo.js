
const clear = (obj) => {
  for(const prop in obj) delete obj[prop];
};

export default (dataStore) => {
  dataStore.diffPosition = redoValue(dataStore.diffs, dataStore.diffPosition);
};

const redoValue = (diffs, p) => {
  const data = diffs[p++],
    key = diffs[p++],
    newValue = diffs[p++],
    oldValue = diffs[p++];

  if (key) {
    data[key] = newValue;
  }
  else {
    clear(data);
    Object.assign(data, newValue);
  }

  return p;
};
