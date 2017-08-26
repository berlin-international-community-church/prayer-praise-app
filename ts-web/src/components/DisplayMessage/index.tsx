import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import * as styles from './styles.css';

interface IProps {
  message?: string;
}

class DisplayMessage extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={this.props.message ? styles.message : styles.hidden}>
        <FormattedMessage id={this.props.message || 'message.blank'} />
      </div>
    );
  }

}

export default DisplayMessage;
