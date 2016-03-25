/**
 * image-sheet-processor.js
 * created by shaunwest on 9/13/15.
 */

// FIXME: use Ramda

export function getAnimation(imageSheet, x, y, width, height, xRange = 1) {
  const rangeEnd = x + (width * xRange),
    animation = [];

  for (let i = x; i < rangeEnd; i+=width) {
    animation.push(getFrame(imageSheet, i, y, width, height));
  }

  return animation;
}

export function getFrame(imageSheet, x, y, width, height) {
  const canvas = document.createElement('canvas');
  canvas.width  = width;
  canvas.height = height;
  canvas
    .getContext('2d')
    .drawImage(
      imageSheet,
      x, y,
      width, height,
      0, 0,
      width, height
    );

  return canvas;
}
