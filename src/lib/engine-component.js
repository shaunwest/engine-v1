import React from 'react';
import Engine from './engine.js';

export default class EngineComponent extends React.Component {
  componentDidMount() {

  }

  render() {
    console.log('render');
    /*this.engineRender = Engine();
    if (this.engineRender && this.refs.canvas) {
      this.engineRender(this.refs.canvas);
    }*/

    return (
      <canvas
        width="200"
        height="200"
        ref={c => { Engine(c) }} />
    );
  }
}
