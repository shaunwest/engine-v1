import React from 'react';
import ReactDOM from 'react-dom';
import Looper from 'base-utils/looper.js';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import { _immutableStore, _mutableStore, _nonSerializableStore } from './lib/data/store';
import { renderByType } from './lib/data/visualizer';

import './sass/style.scss';

// Game Stuff
import Main from './main';
const reactRoot = window.document.getElementById('react-root');
ReactDOM.render(React.createElement(Main), reactRoot);

// Debug Stuff
let tree = renderByType(_mutableStore.state);
let rootNode = createElement(tree);
document.getElementById('vdom-container').appendChild(rootNode);

Looper(_mutableStore.state.loop)('DEBUG_LOOP', (fps, elapsed, totalElapsed, vFrameCount, aFrameCount) => {
  const newTree = renderByType(_mutableStore.state);
  const patches = diff(tree, newTree);
  rootNode = patch(rootNode, patches);
  tree = newTree;
});
