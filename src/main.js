import React from 'react';
import Engine from './lib/engine.js';
import Input from './lib/input.js';
import Loop from './lib/loop.js';
//import Rx from 'rx-dom';

export default class Main extends React.Component {
  componentDidMount() {
    /*Input(this.refs.test).subscribe(([mouseE, keyboardE]) => {
      //console.log(e);
      this.refs.test.innerHTML = `${ mouseE.clientX }, ${ mouseE.clientY}`;
    });*/

    if (!__SERVER__) {
      /*Loop().subscribe(x => {
        //console.log(x);
      });*/
      //Loop();
      /*
      const scheduler = Rx.Scheduler.requestAnimationFrame;

      function render(value) {
        console.log(value);
      }

      Rx.Observable.range(1, 100, scheduler)
        .subscribe(render);
      */
    }
  }

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
        <div style={ {width:100, height:100, background: 'blue'} } ref="test" />
      </div>
    );
  }
}
