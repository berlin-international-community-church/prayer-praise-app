import * as React from 'react';

import * as styles from './styles.css';

class LoadingSpinner extends React.PureComponent {

  render() {
    return (
      <div className={styles.spinnerWrapper}>
        <div className={styles.spinner} />
      </div>
    );
  }

}

export default LoadingSpinner;
