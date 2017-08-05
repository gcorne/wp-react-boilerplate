import React from 'react';

class AdminHeader extends React.Component {

  render() {
    return <h1>{ this.props.children }</h1>;
  }

}

AdminHeader.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
    React.PropTypes.null,
  ]),
};

AdminHeader.defaultProps = {
  children: null,
};

export default AdminHeader;
