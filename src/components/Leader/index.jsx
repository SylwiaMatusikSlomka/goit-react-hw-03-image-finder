import styles from './leader.module.css';
const { Component } = require('react');
const { BallTriangle } = require('react-loader-spinner');

class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
}

export default Loader;
