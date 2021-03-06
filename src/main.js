import React from 'react';

import Game from './lib/game';
import { initAndFetch } from './lib/data/data';

export default class Main extends React.Component {
  componentDidMount() {
    initAndFetch('http://localhost:3000/data/smb-scene.json');
  }

  render() {
    const gameRender = Game();

    return (
      <div>
        <canvas
          width="200"
          height="200"
          ref={ c => gameRender(c) } />
      </div>
    );
  }
}
