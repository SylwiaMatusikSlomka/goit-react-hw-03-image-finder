import Modal from 'components/Modal';
import styles from './imagegaleryitem.module.css';
import PropTypes from 'prop-types';

const { useState } = require('react');

const ImagesGalleryItem = ({ id, webformatURL, largeImageURL, alt }) => {
  const [isOpen, isOpenModal] = useState(false);
  const modalOpen = () => {
    isOpenModal(true);
  };
  const modalClose = () => {
    isOpenModal(false);
  };
  return (
    <>
      <li onClick={modalOpen} key={id} className={styles.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt={alt}
          className={styles.ImageGalleryItemImage}
        />
      </li>
      {isOpen && (
        <Modal largeImageURL={largeImageURL} modalClose={modalClose} />
      )}
    </>
  );
};

export default ImagesGalleryItem;

ImagesGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webformatURL: PropTypes.string,
  alt: PropTypes.object,
  largeImageURL: PropTypes.string,
};
