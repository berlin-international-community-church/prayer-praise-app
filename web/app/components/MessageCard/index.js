import React from 'react';
import styles from './styles.css';

class MessageCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={ this.props.message.messageType === 'prayer' ? 'message prayer' : 'message praise' }>
        {this.props.message.messageText}
        <div className="userInitials">
          RJ
        </div>
      </div>
    )
  }

}

export default MessageCard;
