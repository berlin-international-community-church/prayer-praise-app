import * as React from 'react';

import * as styles from './styles.css';

interface IProps {
  formType: string;
  displayMessage?: string;
  messageText: string;
  handleChangeMessageText(text: string): void;
  handleSubmit();
}

class SubmissionForm extends React.PureComponent<IProps> {

  getMessage(formType) {
    return {
      praise: '2',
      prayer: '1'
    }[formType];
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <h2>{this.getMessage(this.props.formType)}</h2>
        <div className={this.props.displayMessage ? styles.messages : styles.hidden}>
          { this.props.displayMessage }
        </div>
        <div
          className={styles.contentHolder}
          contentEditable={true}
          onInput={ (e) => this.props.handleChangeMessageText(e.target['innerHTML']) }
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
