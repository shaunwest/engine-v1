
export default (dataStore) => renderByType(dataStore);

const isType = (obj, type) =>
  Object.prototype.toString.call(obj) === '[object ' + type + ']';

const canvasToImage = canvas => {
  const img = new Image();
  img.src = canvas.toDataURL();
  return img;
};

const renderByObjectType = obj => {
  if (isType(obj, 'Null')) {
    return renderValue(obj);
  }

  if (isType(obj, 'HTMLImageElement')) {
    return obj;
  }

  if (isType(obj, 'HTMLCanvasElement')) {
    return canvasToImage(obj);
  }

  return renderObject(obj);
};

const renderObject = obj => {
  const ul = document.createElement('ul');

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const li = document.createElement('li');
      li.appendChild(renderValue(`${ key }: `));
      li.appendChild(renderByType(obj[key]));
      ul.appendChild(li);
    }
  }

  return ul;
};

const renderValue = (value) => {
  const span = document.createElement('span');
  span.innerHTML = (value === null) ? 'NULL' : value;
  return span;
};

const renderByType = value => {
  switch (typeof value) {
    case 'object':
      return renderByObjectType(value);
    default:
      return renderValue(value);
  }
};
