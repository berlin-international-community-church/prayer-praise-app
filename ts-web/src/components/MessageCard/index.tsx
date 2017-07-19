import * as React from 'react';

import { PrayerPraise } from '../../constants/enums';
import * as styles from './styles.css';

interface IProps {
  message: {
    messageType: PrayerPraise;
    messageText: string;
    shortUsername: string;
  };
}

class MessageCard extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={ this.props.message.messageType === PrayerPraise.PRAISE ?
        `${styles.message} ${styles.praise}` : `${styles.message} ${styles.prayer}` }>
        {this.props.message.messageText}
        <div className={styles.userInitials}>
          {this.props.message.shortUsername}
        </div>
      </div>
    );
  }

}

export default MessageCard;
