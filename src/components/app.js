import React, { Component } from 'react';

export default class App extends Component {
  render() {
    const {authActions} = this.props.actions;
    const {incrementCount} = authActions;

    return (<div>
        Hello, Wrold! 
        {this.props.count}
        <button onClick={(e) => this.props.dispatch(incrementCount())}>Click</button>
    </div>);
  }
}
