import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  return (
    <>
      <Searchbar />
      <ImageGallery />
      <Button />
      <Loader />
      <Modal />
    </>
  );
};
