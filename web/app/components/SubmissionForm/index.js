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
`;

class SubmissionForm extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="formContainer">
        <form>
          <Content
            contentEditable="true"
            onBlur={(e) => this.props.handleChangePrayerText(e.target.innerHTML)}
          />
          <SwitchButton
            name="sharingStatus"
            label="Share with Prayer Team"
            labelRight="Share with Church"
            onChange={this.props.handleShareStatusChange}
          />
          <button
            className="submitButton"
            type="submit"
            onClick={() => this.props.handlePrayerTextSubmit()}>
            Submit
          </button>
        </form>
      </div>
    );
  }

}

export default SubmissionForm;
