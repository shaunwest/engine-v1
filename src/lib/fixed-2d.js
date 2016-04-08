import { flattenCoord } from 'base-utils/flatten';
import { getArray, getObject } from 'base-utils/pool';

export const mapFixed2dRegion = (flatArray, maxWidth, region) => {
  const startX = region.x;
  const startY = region.y;
  const endX = Math.min(startX + region.width, maxWidth);
  const endY = startY + region.height;
  const result = getArray(); 

  for(let x = startX; x < endX; x++) {
    for(let y = startY; y < endY; y++) {
      const entity = getObject();
      const index = flattenCoord(x, y, maxWidth);
      entity.value = flatArray[index];
      entity.x = x;
      entity.y = y;
      result.push(entity);
    }
  }

  return result;
}
