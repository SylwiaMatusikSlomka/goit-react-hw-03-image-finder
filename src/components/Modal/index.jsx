import styles from './modal.module.css';
const { Component } = require('react');

class Modal extends Component {
  render() {
    const { largeImageURL, modalClose, tags } = this.props;
    return (
      <div onClick={modalClose} className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    );
  }
}
export default Modal;
