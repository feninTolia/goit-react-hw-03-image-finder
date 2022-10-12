import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className="Button"
        onClick={() => this.props.onLoadMoreBtnClick()}
      >
        Load More
      </button>
    );
  }
}

Button.propTypes = {
  onLoadMoreBtnClick: PropTypes.func,
};

export default Button;
