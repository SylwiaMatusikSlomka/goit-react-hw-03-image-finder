import styles from './searchbar.module.css';
import PropTypes from 'prop-types';
const { Component } = require('react');
class SearchBar extends Component {
  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.props.getData} className={styles.SearchForm}>
          <button type="submit" className={styles.SearchFormButton}>
            <span className={styles.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default SearchBar;

SearchBar.propTypes = {
  getData: PropTypes.func.isRequired,
};
