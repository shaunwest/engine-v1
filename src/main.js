import React from 'react';
import Stats from './stats.js';
import EngineComponent from './lib/engine-component.js';

export default class Main extends React.Component {
  /*
  componentDidMount() {
    sub((fps) => { 
      this.setState({
        fps
      });
    });
  }

  render() {
    const fps = this.state.fps;
    return (<Stats fps={ fps } />);
  }*/

  render() {
    return (
      <EngineComponent />
    );
  }
}
