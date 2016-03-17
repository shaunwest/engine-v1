import fetchImage from '../../util/image-loader.js';
import { fetchResource } from '../resource.js';
//import { publish } from '../../util/pubsub.js';
import { publishImmutable, publishNonSerializable } from '../../state/_data-store.js';

export const RECEIVED_TILE_SHEET = 'RECEIVED_TILE_SHEET';
export const RECEIVED_TILE_SHEET_IMAGE = 'RECEIVED_TILE_SHEET_IMAGE';
export const RECEIVED_TILE_SHEET_ERROR = 'RECEIVED_TILE_SHEET_ERROR';

export const fetchTileSheetData = tileSheetSrc =>
  fetchResource('http://localhost:3000/data/' + tileSheetSrc)
    .then(
      json => {
        publishImmutable(RECEIVED_TILE_SHEET, json);
        return json;
      },
      text => 'Error!'
    );

export const fetchTileSheetImage = imageSrc =>
  fetchImage('http://localhost:3000/assets/' + imageSrc)
    .then(
      img => {
        publishNonSerializable(RECEIVED_TILE_SHEET_IMAGE, imageSrc, img);
        return img;
      },
      text => 'Error!'
    );
