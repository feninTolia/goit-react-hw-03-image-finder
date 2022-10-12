import React, { Component } from 'react';

export class Modal extends Component {
  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.escEventUnmount);
  }

  render() {
    return (
      <>
        <div onClick={this.props.handleCloseModal} className="Overlay">
          <div className="Modal">
            <img src={this.props.largeSrc} alt="cat" />
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
