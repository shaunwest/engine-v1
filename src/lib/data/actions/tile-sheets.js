//import 'isomorphic-fetch'
//import getImage from '../../util/image-loader.js';
import fetchImage from '../../util/image-loader.js';
import { fetchResource } from '../resource.js';
import { publish } from '../../util/pubsub.js';

export const RECEIVED_TILE_SHEET = 'RECEIVED_TILE_SHEET';
export const RECEIVED_TILE_SHEET_IMAGE = 'RECEIVED_TILE_SHEET_IMAGE';
export const RECEIVED_TILE_SHEET_ERROR = 'RECEIVED_TILE_SHEET_ERROR';

//const SRC = 'http://localhost:3000/data/kitty-world.json';

/*
// TODO: maybe make this work more like redux?
export const fetchTileSheet = dispatch => {
  fetch(SRC)
    .then(
      response => response.json(),
      response => response.text()
    )
    .then(
      json => dispatch(RECEIVED_LEVEL, () => json),
      text => dispatch(RECEIVED_LEVEL_ERROR, () => text)
    );
};
*/


/*
export const fetchTileSheetData = tileSheetSrc => dispatch =>
  fetchResource('http://localhost:3000/data/' + tileSheetSrc)
    .then(
      json => {
        dispatch(RECEIVED_TILE_SHEET, json);
        return dispatch(fetchTileSheetImage(json.src));
      },
      text => 'Error!'
    );

export const fetchTileSheetImage = imageSrc => dispatch =>
  fetchImage('http://localhost:3000/assets/' + imageSrc)
    .then(
      img => dispatch(RECEIVED_TILE_SHEET_IMAGE, img),
      text => 'Error!'
    );
*/

export const fetchTileSheetData = tileSheetSrc =>
  fetchResource('http://localhost:3000/data/' + tileSheetSrc)
    .then(
      json => {
        publish(RECEIVED_TILE_SHEET, json);
        return fetchTileSheetImage(json.src);
      },
      text => 'Error!'
    );

export const fetchTileSheetImage = imageSrc =>
  fetchImage('http://localhost:3000/assets/' + imageSrc)
    .then(
      img => publish(RECEIVED_TILE_SHEET_IMAGE, img),
      text => 'Error!'
    );

