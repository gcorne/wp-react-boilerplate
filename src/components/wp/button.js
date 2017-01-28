import React from "react";
import classNames from "classnames";

class Button extends React.Component {

  render() {
    const className = classNames(this.props.className, {
      'button-primary': this.props.type === 'primary',
      'button-secondary': this.props.type === 'secondary',
    });
    return (
      <button className={className}>{ this.props.children }</button>
    );
  }
}

Button.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.string,
    React.PropTypes.null,
  ]),
  className: React.PropTypes.string,
  type: React.PropTypes.string,
};

Button.defaultProps = {
  children: null,
  className: '',
  type: 'secondary',
};

export default Button;
