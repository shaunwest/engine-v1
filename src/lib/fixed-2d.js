import { flattenCoord } from 'base-utils/flatten';
//import { getArray, getObject } from 'base-utils/pool';

export const mapFixed2dRegion = (flatArray, maxWidth, region, mapFunc) => {
  const startX = region.x;
  const startY = region.y;
  const endX = Math.min(startX + region.width, maxWidth);
  const endY = startY + region.height;
  //const regionArray = getArray();

  for(let x = startX; x < endX; x++) {
    for(let y = startY; y < endY; y++) {
      const index = flattenCoord(x, y, maxWidth);
      const value = flatArray[index];
      mapFunc(value, x, y);
    }
  }
}
