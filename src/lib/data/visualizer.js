import h from 'virtual-dom/h';

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

  return renderObject(obj);
};

const renderObject = obj =>
  h('ul', Object.keys(obj).map(key => 
    h('li', [
      renderValue(`${ key }: `),
      renderByType(obj[key])
    ])));

const renderValue = value => h('span', {}, String(value));

export const renderByType = value =>
  (typeof value === 'object') ? 
    renderByObjectType(value) :
    renderValue(value);
