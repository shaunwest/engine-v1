import React from 'react';
import Game from './lib/game.js';

export default class Main extends React.Component {
  render() {
    const {contentRender, dataRender} = Game();

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
