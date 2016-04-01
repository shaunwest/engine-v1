import fetchImage from 'base-utils/image-loader.js';
import { fetchResource } from 'base-utils/resource.js';
import { publishImmutable, publishMutable } from '../store.js';
import { createAnimations } from '../actions/animations.js';

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
        publishMutable(RECEIVED_TILE_SHEET_IMAGE, imageSrc, img);
        return img;
      },
      text => 'Error!'
    );

export const processTileSheet = (tileSheetId, tileSheet, gameImages) =>
  gameImages.forEach((gameImage, gameImageIndex) =>
    createAnimations(tileSheetId, tileSheet, gameImageIndex, gameImage));
