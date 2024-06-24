import css from './button.module.css';
import PropTypes from 'prop-types';
const { Component } = require('react');
class Button extends Component {
  render() {
    return (
      <button onClick={this.props.nextPage} className={css['btn-load-more']}>
        Load more
      </button>
    );
  }
}
export default Button;

Button.propTypes = {
  nextPage: PropTypes.func.isRequired,
};
