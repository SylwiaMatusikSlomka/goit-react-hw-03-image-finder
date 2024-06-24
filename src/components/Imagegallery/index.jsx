import ImagesGalleryItem from '../Imagegaleryitem';
import styles from './imagegallery.module.css';
import PropTypes from 'prop-types';

const { Component } = require('react');

class ImagesGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {images.map(image => {
          const { id, webformatURL, tags, largeImageURL } = image;
          return (
            <ImagesGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </ul>
    );
  }
}
export default ImagesGallery;

ImagesGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
