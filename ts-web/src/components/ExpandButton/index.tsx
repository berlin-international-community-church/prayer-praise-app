import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import * as styles from './styles.css';

interface IProps {
  toggleSidebar();
}

const ExpandButton: React.SFC<IProps> = (props) => {
  return (
    <div className={styles.toggleButton} onClick={() => props.toggleSidebar()}>
      <div className={styles.wrapper}>
        <div className={styles.menuTop}></div>
        <div className={styles.menuMiddle}></div>
        <div className={styles.menuBottom}></div>
      </div>
    </div>
  );
};

export default ExpandButton;
