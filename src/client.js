import React from 'react';
import ReactDOM from 'react-dom';

import './sass/style.scss';

import Main from './main';

const reactRoot = window.document.getElementById('react-root');

ReactDOM.render(React.createElement(Main), reactRoot);
