import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import * as styles from './styles.css';

class Footer extends React.PureComponent {

  render() {
    return (
      <div className={styles.footer}>
        <FormattedMessage id="components.Footer.main" />
      </div>
    );
  }

}

export default Footer;
