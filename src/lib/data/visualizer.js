import h from 'virtual-dom/h';

const MAX_ARRAY_LENGTH = 150;

const isType = (obj, type) =>
  Object.prototype.toString.call(obj) === '[object ' + type + ']';

const canvasToImage = canvas => h('img', { src: canvas.toDataURL() });

const renderByObjectType = obj => {
  if (isType(obj, 'Null')) {
    return renderValue('');
  }

  if (isType(obj, 'HTMLImageElement')) {
    return h('img', { src: obj.src });
  }

  if (isType(obj, 'HTMLCanvasElement')) {
    return canvasToImage(obj);
  }

  if (isType(obj, 'Array')) {
    return (obj.length < MAX_ARRAY_LENGTH) ?
      renderArray(obj) :
      renderValue('[Array Too Long]');
  }

  return renderObject(obj);
};

const renderObject = obj =>
  h('ul', Object.keys(obj).map(key => 
    h('li', [
      renderValue(`${ key }: `),
      renderByType(obj[key])
    ])));

const renderArray = arr =>
  h('div', arr.map(val => 
    h('span', renderByType(val))));

const renderValue = value => h('span', {}, String(value));

export const renderByType = value =>
  (typeof value === 'object') ? 
    renderByObjectType(value) :
    renderValue(value);
