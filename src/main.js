import React from 'react';
import EngineData from './lib/engine-data.js';
import Engine from './lib/engine.js';

export default class Main extends React.Component {
  render() {
    const {contentRender, dataRender} = Engine();

    return (
      <div>
        <canvas
          width="200"
          height="200"
          ref={ c => contentRender(c) } />
        <div
          ref={ d => dataRender(d) } />
      </div>
    );
  }
}
