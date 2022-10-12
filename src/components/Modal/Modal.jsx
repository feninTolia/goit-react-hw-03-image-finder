import React, { Component } from 'react';

export class Modal extends Component {
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
