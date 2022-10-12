// const ImageGalleryItem = ({ photoSrc, photoAlt }) => {
//   handleItemClic = () => {};

//   return (
//     <>
//       <li onClick={this.handleItemClick} className="ImageGalleryItem">
//         <img src={photoSrc} alt={photoAlt} className="ImageGalleryItem-image" />
//       </li>
//     </>
//   );
// };

// export default ImageGalleryItem;

import Modal from 'components/Modal/Modal';
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    modal: false,
  };

  handleItemClic = () => {
    this.setState({ modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { photoSrc, photoAlt, largeSrc } = this.props;

    return (
      <>
        <li onClick={this.handleItemClic} className="ImageGalleryItem">
          <img
            src={photoSrc}
            alt={photoAlt}
            className="ImageGalleryItem-image"
          />
        </li>
        {this.state.modal && (
          <Modal largeSrc={largeSrc} handleCloseModal={this.handleCloseModal} />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
