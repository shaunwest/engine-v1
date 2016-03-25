import { fetchResource } from '../resource.js';
import { publishImmutable } from '../store.js';

export const RECEIVED_LEVEL = 'RECEIVED_LEVEL';
export const RECEIVED_LEVEL_ERROR = 'RECEIVED_LEVEL_ERROR';
export const LEVEL_READY = 'LEVEL_READY';

export const fetchLevel = src =>
  fetchResource(src)
    .then(
      json => { 
        publishImmutable(RECEIVED_LEVEL, json);
        return json;
      },
      text => publishImmutable(RECEIVED_LEVEL_ERROR, text)
    );

export const levelReady = () =>
  publishImmutable(LEVEL_READY);
