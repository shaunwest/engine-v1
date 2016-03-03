export function clone(obj) {
  return Object.assign({}, obj);
}

export function merge(toObj, fromObj) {
  return Object.assign({}, toObj, fromObj);
}

export function clear(obj) {
  for(const prop in obj) delete obj[prop];
  return obj;
}
