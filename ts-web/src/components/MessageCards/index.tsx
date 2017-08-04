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
              { this.renderBadge(message.messageType) }
              <div className={styles.messageText}>
                {message.id === this.props.expandedMessage ?
                  message.messageText : `${message.messageText.substr(0, 20)} ...`}
              </div>
              <div className={message.id === this.props.expandedMessage ?
                styles.username : styles.userInitials}>
                <p>
                  {message.id === this.props.expandedMessage ?
                    message.username : message.shortUsername}
                </p>
              </div>
            </div>
          );
        }) }
      </div>
    );
  }

}

export default MessageCards;
