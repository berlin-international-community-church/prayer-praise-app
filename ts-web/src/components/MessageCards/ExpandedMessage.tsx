import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { SharedMessageType } from '../../constants/types';
import Badge from './Badge';
import * as styles from './styles.css';

interface IProps {
  message: SharedMessageType;
  expand(id?: number);
}

const ExpandedMessage: React.SFC<IProps> = (props) => {
  return (
    <div className={styles.expandedMessage}
      onClick={() => props.expand(props.message.id)}
    >
      <div className={styles.topSection}>
        <Badge messageType={props.message.messageType} />
        <div className={styles.username}>
          {props.message.username}
        </div>
      </div>
      <div className={styles.expandedMessageText}>
        {props.message.messageText}
      </div>
    </div>
  );
};

export default ExpandedMessage;
