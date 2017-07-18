import * as React from 'react';

import * as styles from './styles.css';

class Footer extends React.PureComponent {

  render() {
    return (
      <div className={styles.footer}>
        &copy; Berlin 2017
      </div>
    );
  }

}

export default Footer;
