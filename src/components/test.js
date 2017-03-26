import React, { Component } from 'react';

export default class Test extends Component {
    render() {
        console.log('here', this.props);
        return (<div>
            Hello, Wrold! 
            {this.props.count}
        </div>);
    }
}
