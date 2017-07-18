import * as React from 'react';

import * as styles from './styles.css';

interface IProps {
  message?: string;
}

class DisplayMessage extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={this.props.message ? styles.message : styles.hidden}>
        { this.props.message }
      </div>
    );
  }

}

export default DisplayMessage;
