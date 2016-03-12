
let _topics = {};

export const initTopics = topics => _topics = topics;
export const getTopic = topic => _topics[topic] || createTopic(topic)
export const createTopic = topic => _topics[topic] = [];
export const subscribe = (topic, fn) => getTopic(topic).push(fn);
export const publish = (topic, ...values) => {
  for (let fn of _topics[topic]) fn.apply(null, values);
};
