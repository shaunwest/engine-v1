import 'isomorphic-fetch';
import { fetchResource } from '../resource.js';
import { fetchTileSheetData } from './tile-sheets.js';
import { publish } from '../../util/pubsub.js';
export const RECEIVED_LEVEL = 'RECEIVED_LEVEL';
export const RECEIVED_LEVEL_ERROR = 'RECEIVED_LEVEL_ERROR';

/*
export const fetchLevel = dispatch => {
  fetch('http://localhost:3000/data/kitty-world.json')
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
export const fetchLevel = src => dispatch =>
  fetchResource(src)
    .then(
      json => {
        dispatch(RECEIVED_LEVEL, json);
        return dispatch(fetchTileSheetData(json.layers.background.tileSheet + '.json'));
      },
      text =>
        dispatch(RECEIVED_LEVEL_ERROR, text)
    );
*/

/*
export const fetchLevel = (dispatch, src) =>
  fetchResource(src)
    .then(
      json => {
        dispatch(receivedLevel, json);
        fetchTileSheetData(dispatch, json.layers.background.tileSheet + '.json');
      },
      text => dispatch(receivedLevelError, text)
    );
*/

export const fetchLevel = src =>
  fetchResource(src)
    .then(
      json => {
        publish(RECEIVED_LEVEL, json);
        fetchTileSheetData(json.layers.background.tileSheet + '.json');
      },
      text => publish(RECEIVED_LEVEL_ERROR, text)
    );
