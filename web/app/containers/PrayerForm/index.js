import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import SubmissionForm from '../../components/SubmissionForm';
import {
  changeMessageType,
  changeMessageText,
  changeSharedStatus,
  submitMessage
} from './actions';

const Page = styled.div`
  width: 100%;
  min-height: 80%;
`;

const PRAYER = 'prayer';

export class PrayerForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.changeMessageType({ messageType: PRAYER });
  }

  render() {
    return (
      <Page>
        <Helmet title="BICC: Prayer Form" />
        <SubmissionForm
          formType={PRAYER}
          handleChangeMessageText={this.props.changeMessageText}
          handleShareStatusChange={this.props.changeSharedStatus}
          handleSubmit={this.props.submitMessage}
        />
      </Page>
    );
  }

}

const mapStateToProps = createStructuredSelector({
});

function mapDispatchToProps(dispatch) {
  return {
    changeMessageType: (payload) => dispatch(changeMessageType(payload)),
    changeMessageText: (txt) => dispatch(changeMessageText(txt)),
    changeSharedStatus: () => dispatch(changeSharedStatus()),
    submitMessage: () => dispatch(submitMessage())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrayerForm);
