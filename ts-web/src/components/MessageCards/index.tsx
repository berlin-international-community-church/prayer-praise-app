import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { PrayerPraise } from '../../constants/enums';
import { SharedMessageType } from '../../constants/types';
import * as styles from './styles.css';

interface IProps {
  expandedMessage?: number;
  sharedMessages: SharedMessageType[];
  expand(id?: number);
}

class MessageCards extends React.PureComponent<IProps> {

  renderBadge(messageType: PrayerPraise) {
    if (messageType === PrayerPraise.PRAISE) {
      return <FormattedMessage id="components.Badge.praise" />
    }
    return <FormattedMessage id="components.Badge.prayer" />
  }

  render() {
    return (
      <div className={styles.messages}>
        { this.props.sharedMessages.map((message) => {
          return (
            <div
              key={message.id}
              className={message.id === this.props.expandedMessage ?
              styles.expandedMessage : styles.message}
              onClick={() => this.props.expand(message.id)}
            >
              <div className={ message.messageType === PrayerPraise.PRAISE ?
                styles.praiseBadge : styles.prayerBadge }>
                { this.renderBadge(message.messageType) }
              </div>
              <div className={styles.messageText}>
                {message.id === this.props.expandedMessage ?
                  message.messageText : `${message.messageText.substr(0, 20)}...`}
              </div>
              <div className={styles.userInitials}>
                {message.shortUsername}
              </div>
            </div>
          );
        }) }
      </div>
    );
  }

}

export default MessageCards;
