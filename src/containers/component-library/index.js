import React from 'react';
// eslint-disable-next-line
import {AdminHeader, Button, Notice} from "components/wp";

require('./style.scss');

const config = window.WPRB;


class ComponentLibrary extends React.Component {

  render() {
    return (
      <div className="wp-styleguide">
        <AdminHeader>
          WP React Component Library
        </AdminHeader>

        <Notice type="info">The is an informative notice</Notice>
        <Notice type="success">Your action was successful</Notice>
        <Notice type="error">An unexpected error has occurred</Notice>

        <div className="wp-styleguide-buttons">
          <h2>Buttons</h2>
          <p>
            <Button type="primary">Primary Button</Button>
          </p>
          <p>
            <Button type="secondary">Secondary Button</Button>
          </p>
        </div>

        <div className="wp-styleguide-buttons">
          <h2>Server Configurations:</h2>
          <p><strong>Version: </strong>{config.version}</p>
          <p><strong>Date: </strong>{config.date}</p>
        </div>

      </div>
    );
  }
}

export default ComponentLibrary ;
