import * as React from 'react';

import { PrayerPraise, ShareStatus } from '../../constants/enums';
import DisplayMessage from '../DisplayMessage';
import SelectBar from '../SelectBar';
import * as styles from './styles.css';

interface IProps {
  formType: PrayerPraise;
  displayMessage?: string;
  messageText: string;
  sharedStatus: ShareStatus;
  handleChangeMessageText(text: string): void;
  handleChangeShareStatus(status: ShareStatus): void;
  handleSubmit();
}

class SubmissionForm extends React.PureComponent<IProps> {

  getMessage(formType) {
    return {
      [PrayerPraise.PRAISE]: 'Praise',
      [PrayerPraise.PRAYER]: 'Prayer'
    }[formType];
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <h2>{this.getMessage(this.props.formType)}</h2>
        <DisplayMessage message={this.props.displayMessage} />
        <div
          className={styles.contentHolder}
          contentEditable={true}
          onInput={ (e) => this.props.handleChangeMessageText(e.target['innerHTML']) }
        >
          {this.props.messageText}
        </div>
        <SelectBar
          sharedStatus={this.props.sharedStatus}
          handleChangeShareStatus={(status: ShareStatus) => this.props.handleChangeShareStatus(status)}
        />
        <button
          disabled={this.props.messageText.trim().length === 0}
          className={this.props.messageText.trim().length === 0 ? styles.disabledButton : styles.submitButton}
          onClick={ (e) => { e.preventDefault(); this.props.handleSubmit(); } }>
          Submit
        </button>
      </div>
    );
  }

}

export default SubmissionForm;
