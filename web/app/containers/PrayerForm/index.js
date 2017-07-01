import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import SubmissionForm from '../../components/SubmissionForm';
import { makeSelectPrayerText } from './selectors';
import { changePrayerText } from './actions';
import messages from './messages';

const Page = styled.div`
  width: 100%;
  min-height: 80%;
`;

export class PrayerForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Page>
        <Helmet title="BICC: Prayer Form" />
        <SubmissionForm
          handleChangePrayerText={this.props.changePrayerText}
          handleShareStatusChange={() => {}}
          handleSubmit={{}}
          type={'prayer'}
        />
      </Page>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  prayerText: makeSelectPrayerText(),
});

function mapDispatchToProps(dispatch) {
  return {
    changePrayerText: (txt) => dispatch(changePrayerText(txt))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrayerForm);
