import React, { PropTypes, Component } from 'react';

export default class App extends Component {
  render() {
        const content = this.props.children;
        return (
            <div className="main">
                {content}
            </div>
        );
    }
}
