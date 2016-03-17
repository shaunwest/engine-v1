import { fetchResource } from '../resource.js';
import { fetchTileSheetData } from './tile-sheets.js';
//import { publish } from '../../util/pubsub.js';
import { publishImmutable } from '../../state/_data-store.js';

export const RECEIVED_LEVEL = 'RECEIVED_LEVEL';
export const RECEIVED_LEVEL_ERROR = 'RECEIVED_LEVEL_ERROR';

export const fetchLevel = src =>
  fetchResource(src)
    .then(
      json => { 
        publishImmutable(RECEIVED_LEVEL, json);
        return json;
      },
      text => publishImmutable(RECEIVED_LEVEL_ERROR, text)
    );
