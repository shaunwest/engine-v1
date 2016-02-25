import React from 'react';

const draw = (canvas, image) => canvas.drawImage(image, 0, 0);

export default function render(image) {
  return (<canvas width="200" height="200" ref={ c => draw(c, image) }/>);
}
