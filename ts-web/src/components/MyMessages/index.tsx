import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { SharedMessageType } from '../../constants/types';
import * as styles from './styles.css';

interface IProps {
  messages: SharedMessageType[];
  deleteMessage(payload: number);
  editMessage(id: number, payload: string);
}

class MyMessages extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.messages}>
        {this.props.messages.map((message) => {
          return (
            <div className={styles.message} key={message.id}>
              <span>{message.messageText.replace(/<[^>]*>/ig, ' ').substr(0, 20)}...</span>
              <span>
                <button className={styles.editButton}
                  onClick={() => this.props.editMessage(message.id, `/edit/messages/${message.id}`)}>
                  <FormattedMessage id="actions.edit" />
                </button>
              </span>
              <span>
                <button className={styles.deleteButton}
                  onClick={() => this.props.deleteMessage(message.id)}>
                  <FormattedMessage id="actions.delete" />
                </button>
              </span>
            </div>
          );
        })}
      </div>
    );
  }

}

export default MyMessages;
