import { flattenCoord } from 'base-utils/flatten';

export const mapFixed2dRegion = (flatArray, maxWidth, region, mapFunc) => {
  const startX = region.x;
  const startY = region.y;
  const endX = Math.min(startX + region.width, maxWidth);
  const endY = startY + region.height;

  for(let x = startX; x < endX; x++) {
    for(let y = startY; y < endY; y++) {
      const index = flattenCoord(x, y, maxWidth);
      const value = flatArray[index];
      mapFunc(x, y, value);
    }
  }
}
