import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';

const ImageGallery = ({ photos, onFullImgLoad }) => {
  return (
    <div>
      <ul className="ImageGallery">
        {photos.map(el => (
          <ImageGalleryItem
            key={el.id}
            photoSrc={el.webformatURL}
            photoAlt={el.tags}
            largeSrc={el.largeImageURL}
          />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
