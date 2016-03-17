import 'isomorphic-fetch';

export const fetchResource = src =>
  fetch(src)
    .then(
      response => response.json(),
      response => response.text()
    );

export const fetchResources = (...sources) =>
  Promise.all(sources.map(source =>
    fetchResource(source)
  ));
