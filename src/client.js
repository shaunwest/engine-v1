import React from 'react';
import ReactDOM from 'react-dom';
import Looper from 'base-utils/looper.js';
import diff from 'virtual-dom/diff';
import patch from 'virtual-dom/patch';
import createElement from 'virtual-dom/create-element';

import { _immutableStore, _mutableStore } from './lib/data/store';
import { renderByType } from './lib/data/visualizer';

import './sass/style.scss';

// Game Stuff
import Main from './main';
const reactRoot = window.document.getElementById('react-root');
ReactDOM.render(React.createElement(Main), reactRoot);

// Debug Stuff
const debugLoop = Looper(_mutableStore.state.loop);

const debug = (container, loopId, store) => {
  let tree = renderByType(store.state);
  let rootNode = createElement(tree);
  document.getElementById(container).appendChild(rootNode);

  debugLoop(loopId, (fps, elapsed, totalElapsed, vFrameCount, aFrameCount) => {
    const newTree = renderByType(store.state);
    const patches = diff(tree, newTree);
    rootNode = patch(rootNode, patches);
    tree = newTree;
  });
}

debug('mutable-debug-container', 'MUTABLE_DEBUG_LOOP', _mutableStore);
//debug('immutable-debug-container', 'IMMUTABLE_DEBUG_LOOP', _immutableStore);
