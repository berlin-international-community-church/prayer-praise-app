import * as React from 'react';

import { SharedMessageType } from '../../constants/types';
import * as styles from './styles.css';

interface IProps {
  messages: SharedMessageType[];
}

class MyMessages extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.messages}>
        <table>
          <tbody>
            {this.props.messages.map((message) => {
              return (
                <tr key={message.id}>
                  <td>{message.messageText.substr(0, 20)}...</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

}

export default MyMessages;
