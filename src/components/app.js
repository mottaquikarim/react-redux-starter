import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    const {authActions} = this.props.actions;
    const {incrementCount} = authActions;

    return (<div>
        Hello, Wrold! 
        {this.props.count}
        <button onClick={(e) => this.props.dispatch(incrementCount())}>Click</button>

		<Link to="/test" >screen1</Link><br/>

        {this.props.children}
    </div>);
  }
}
