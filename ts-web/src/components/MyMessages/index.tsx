import * as React from 'react';

import { SharedMessageType } from '../../constants/types';
import * as styles from './styles.css';

interface IProps {
  messages: SharedMessageType[];
  deleteMessage(payload: number);
  editMessage(payload: string);
}

class MyMessages extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.messages}>
        {this.props.messages.map((message) => {
          return (
            <div className={styles.message} key={message.id}>
              <span>{message.messageText.substr(0, 20)}...</span>
              <span>
                <button className={styles.editButton}
                  onClick={() => this.props.editMessage(`/edit/messages/${message.id}`)}>
                  Edit
                </button>
              </span>
              <span>
                <button className={styles.deleteButton}
                  onClick={() => this.props.deleteMessage(message.id)}>
                  Delete
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
