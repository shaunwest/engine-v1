import React from 'react';

export default class Stats extends React.Component {
  render() {
    return (<div>{ this.props.fps }</div>);
  }
}
