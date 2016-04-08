import { flattenCoord } from 'base-utils/flatten';
import { initArray } from 'base-utils/obj';

const getSegmentsArray = (renderWidth, renderHeight, segmentSize) =>
  initArray(
    Math.floor((renderWidth / segmentSize) * (renderHeight / segmentSize)),
    () => new Map()
  )

export const createFree2dSegments = (renderArray, renderWidth, renderHeight, segmentSize) => {
  const segments = getSegmentsArray(renderWidth, renderHeight, segmentSize)

  for (const entity of renderArray) {
    segments[flattenCoord(
      Math.floor(entity.x / segmentSize),
      Math.floor(entity.y / segmentSize),
      Math.floor(renderWidth / segmentSize)
    )].set(entity, entity)
  }

  return segments
}
