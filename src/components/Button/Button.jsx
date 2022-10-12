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

export default Button;
