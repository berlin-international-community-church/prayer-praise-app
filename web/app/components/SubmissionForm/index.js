import React from 'react';
import styled from 'styled-components';
import SwitchButton from 'react-switch-button';

import styles from './styles.css';
import lineSvg from './line.svg';

const Content = styled.div`
  color: #444;
  font-family: 'Kalam', cursive;
  font-size: 22px;
  min-width: 80%;
  min-height: 80%;
  resize: none;
  background-image: url(${lineSvg});
  background-repeat: repeat;
  line-height: 41px;
  margin-bottom: 20px;
`;

class SubmissionForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getMessage(formType) {
    return {
      prayer: 'I need prayer for',
      praise: 'I praise God for'
    }[formType];
  }

  render() {
    return (
      <div className="formContainer">
        <h2>{this.getMessage(this.props.formType)}</h2>
        <form>
          <Content
            contentEditable="true"
            onBlur={(e) => this.props.handleChangeMessageText(e.target.innerHTML)}
          />
          <SwitchButton
            name="sharingStatus"
            label="Share with Prayer Team only"
            labelRight="Share with Church"
            onChange={this.props.handleShareStatusChange}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={ (e) => { e.preventDefault(); this.props.handleSubmit(); } }>
            Submit
          </button>
        </form>
      </div>
    );
  }

}

export default SubmissionForm;
