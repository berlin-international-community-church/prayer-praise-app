import * as React from 'react';
import * as styles from './styles.css';

interface IProps {
  message: {
    messageType: string;
    messageText: string;
  }
}

class MessageCard extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.message}>
        {this.props.message.messageText}
        <div className={styles.userInitials}>
          RJ
        </div>
      </div>
    )
  }

}

export default MessageCard;
