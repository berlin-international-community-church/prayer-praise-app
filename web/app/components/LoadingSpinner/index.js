import React from 'react';
import styles from './styles.css';

class LoadingSpinner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="spinnerWrapper">
        <div className="spinner" />
      </div>
    );
  }

}

export default LoadingSpinner;
