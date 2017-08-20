import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { SharedMessageType } from '../../constants/types';
import { PrayerPraise } from '../../constants/enums';
import Badge from './Badge';

import * as styles from './styles.css';

interface IProps {
  message: SharedMessageType;
  expand(id?: number);
}

const ExpandedMessage: React.SFC<IProps> = (props) => {
  return (
    <div
      className={styles.message}
      onClick={() => props.expand(props.message.id)}
    >
      <Badge messageType={props.message.messageType} />
      <div className={styles.expandedMessage}>
        {props.message.messageText}
      </div>
      <div className={styles.username}>
        <p>{props.message.shortUsername}</p>
      </div>
    </div>
  );
};

export default ExpandedMessage;
