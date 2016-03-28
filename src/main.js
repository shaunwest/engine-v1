import React from 'react';

import Game from './lib/game';
import { initAndFetch } from './lib/data/data';

const noop = () => {};

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false 
    };
  }

  componentDidMount() {
    initAndFetch().then(() => this.setState({ ready: true }));
  }

  render() {
    const gameRender = (this.state.ready) ? Game() : noop;

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
