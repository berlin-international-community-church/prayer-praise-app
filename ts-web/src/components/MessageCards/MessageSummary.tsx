import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { SharedMessageType } from '../../constants/types';
import Badge from './Badge';
import * as styles from './styles.css';

interface IProps {
  message: SharedMessageType;
  expand(id?: number);
}

const MessageSummary: React.SFC<IProps> = (props) => {
  return (
    <div
      className={styles.message}
      onClick={() => props.expand(props.message.id)}
    >
      <Badge messageType={props.message.messageType} />
      <div className={styles.messageText}>
        {`${props.message.messageText.substr(0, 20)} ...`}
      </div>
      <div className={styles.userInitials}>
        {props.message.shortUsername}
      </div>
    </div>
  );
};

export default MessageSummary;
