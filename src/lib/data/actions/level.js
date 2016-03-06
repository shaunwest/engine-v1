import 'isomorphic-fetch';

export const RECEIVED_LEVEL = 'RECEIVED_LEVEL';
export const RECEIVED_LEVEL_ERROR = 'RECEIVED_LEVEL_ERROR';

const SRC = '';

export const fetchLevel = dispatch => {
  fetch(SRC)
    .then(
      response => response.json(),
      response => response.text()
    )
    .then(
      json => dispatch(RECEIVED_LEVEL, json),
      text => dispatch(RECEIVED_LEVEL_ERROR, text)
    );
});
