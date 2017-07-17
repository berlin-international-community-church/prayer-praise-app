import * as React from 'react';

import * as styles from './styles.css';

interface IProps {
  formType: string;
  handleChangeMessageText(string): void;
  handleSubmit()
}

class SubmissionForm extends React.PureComponent<IProps> {

  getMessage(formType) {
    return {
      prayer: '1',
      praise: '2'
    }[formType];
  }

  render() {
    return (
      <div className={styles.formContainer}>
        <h2>{this.getMessage(this.props.formType)}</h2>
        <div
          className={styles.contentHolder}
          contentEditable={true}
          onInput={ (e) => this.props.handleChangeMessageText(e.target['innerHTML']) }
        />
        <button
          className={styles.submitButton}
          onClick={ (e) => { e.preventDefault(); this.props.handleSubmit(); } }>
          Submit
        </button>
      </div>
    );
  }

}

export default SubmissionForm;
