import React from 'react';

const ImageGalleryItem = ({ photoSrc, photoAlt }) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img src={photoSrc} alt={photoAlt} className="ImageGalleryItem-image" />
      </li>
    </>
  );
};

export default ImageGalleryItem;
