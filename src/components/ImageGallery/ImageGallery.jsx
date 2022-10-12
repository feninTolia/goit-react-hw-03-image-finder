import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ photos }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {photos.map(el => (
          <ImageGalleryItem
            key={el.id}
            photoSrc={el.webformatURL}
            photoAlt={el.tags}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
