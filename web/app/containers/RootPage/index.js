import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import MessageCard from '../../components/MessageCard';
import messages from './messages';
import styles from './styles.css';

const sampleData = [
  { id: 1, messageType: 'prayer', messageText: 'Help in my exams.' },
  { id: 2, messageType: 'prayer', messageText: 'Healing from a sickness.' },
  { id: 3, messageType: 'prayer', messageText: 'Getting a visa.' },
  { id: 4, messageType: 'prayer', messageText: 'Finding a job.' },
  { id: 5, messageType: 'praise', messageText: 'God\'s amazing love!'},
  { id: 6, messageType: 'praise', messageText: 'Healing from a sickness.' },
  { id: 7, messageType: 'praise', messageText: 'Promotion at job.' },
  { id: 8, messageType: 'praise', messageText: 'Food at my table.' }
];

export default class RootPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  displayMessages() {
    return sampleData.map((message) => {
      return (
        <MessageCard message={message} key={message.id} />
      )
    });
  }

  render() {
    return (
      <div className="page">
        <h2>Shared Requests</h2>
        <div className="messages">
          { this.displayMessages() }
        </div>
      </div>
    );
  }

}
