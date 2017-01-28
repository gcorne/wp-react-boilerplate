import React from 'react';

require('./style.scss');

const config = window.WPRB;

export default class Widget extends React.Component {
  displayName: 'Widget';

  render() {
    return (
      <div className="react-boilerplate-widget">
        <h3>Hello, World!</h3>
        <p>I made this thing.</p>
        <p><strong>Version: </strong>{window.WPRB.version}</p>
        <p><strong>Date: </strong>{config.date}</p>
      </div>
    );
  }
}
