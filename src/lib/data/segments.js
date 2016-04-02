import { flattenCoord } from 'base-utils/flatten';
import { initArray } from 'base-utils/obj';

const getSegmentsArray = (renderWidth, renderHeight, segmentWidth) => 
  initArray(
    Math.floor((renderWidth / segmentWidth) * (renderHeight / segmentWidth)),
    () => new Map()
  )

export const createFree2dSegments = (renderArray, renderWidth, renderHeight, segmentWidth) => {
  const segments = getSegmentsArray(renderWidth, renderHeight, segmentWidth)

  for (const entity of renderArray) {
    segments[flattenCoord(
      Math.floor(entity.x / segmentWidth),
      Math.floor(entity.y / segmentWidth),
      Math.floor(renderWidth / segmentWidth)
    )].set(entity, entity)
  }

  return segments
}
