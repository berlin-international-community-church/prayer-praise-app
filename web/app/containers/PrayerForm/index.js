/*
 *
 * PrayerForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectPrayerText } from './selectors';
import { changePrayerText } from './actions';
import lineSvg from './line.svg';
import messages from './messages';

const SubmitButton = styled.button`
  background-color: #E10827;
  color: #FFFFFF;
  margin-top: 20px;
  padding: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 20px;

  form {
    width: 80%;
    height: 80%;
  }

  div {
    color: #444;
    font-family: 'Kalam', cursive;
    font-size: 22px;
    min-width: 80%;
    min-height: 80%;
    resize: none;
    background-image: url(${lineSvg});
    background-repeat: repeat;
    line-height: 41px;
  }
`;

export class PrayerForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleChangePrayerText(event) {
    event.preventDefault();
    this.props.changePrayerText(event.target.innerHTML);
  }

  handlePrayerTextSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <FormContainer>
        <Helmet title="BICC: Prayer Form" />
        <form>
          <div
            contentEditable="true"
            onBlur={(e) => this.handleChangePrayerText(e)}
          />
          <SubmitButton
            type='submit'
            onClick={(e) => this.handlePrayerTextSubmit(e)}>
            Submit
          </SubmitButton>
        </form>
      </FormContainer>
    );
  }

}

PrayerForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  prayerText: makeSelectPrayerText(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    changePrayerText: (txt) => dispatch(changePrayerText(txt))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrayerForm);
