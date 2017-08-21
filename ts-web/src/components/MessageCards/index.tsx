import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import { SharedMessageType } from '../../constants/types';
import ExpandedMessage from './ExpandedMessage';
import MessageSummary from './MessageSummary';
import * as styles from './styles.css';

interface IProps {
  expandedMessage?: number;
  sharedMessages: SharedMessageType[];
  expand(id?: number);
}

class MessageCards extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.messages}>
        { this.props.sharedMessages.map((message) => {
          if (message.id === this.props.expandedMessage) {
            return <ExpandedMessage message={message} expand={this.props.expand} key={message.id} />;
          }
          return <MessageSummary message={message} expand={this.props.expand} key={message.id} />;
        }) }
      </div>
    );
  }

}

export default MessageCards;
