import { fetchResource } from '../resource.js';
import { publishImmutable, publishMutable } from '../store.js';

export const RECEIVED_SCENE = 'RECEIVED_SCENE';
export const RECEIVED_SCENE_ERROR = 'RECEIVED_SCENE_ERROR';
export const SCENE_READY = 'SCENE_READY';

export const fetchScene = src =>
  fetchResource(src)
    .then(
      json => { 
        publishImmutable(RECEIVED_SCENE, json);
        return json;
      },
      text => publishImmutable(RECEIVED_SCENE_ERROR, text)
    );

export const sceneReady = () =>
  publishMutable(SCENE_READY);
