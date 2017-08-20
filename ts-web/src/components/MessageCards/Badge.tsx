import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { PrayerPraise } from '../../constants/enums';

import * as styles from './styles.css';

interface IProps {
  messageType: PrayerPraise;
}

const Badge: React.SFC<IProps> = (props) => {
  if (props.messageType === PrayerPraise.PRAISE) {
    return (
      <div className={styles.praiseBadge}>
        <FormattedMessage id="components.Badge.praise" />
      </div>
    );
  }
  return (
    <div className={styles.prayerBadge}>
      <FormattedMessage id="components.Badge.prayer" />
    </div>
  );
};

export default Badge;
