import * as React from 'react';
import { connect } from 'react-redux';

import LoadingSpinner from '../../components/LoadingSpinner';
import SubmissionForm from '../../components/SubmissionForm';
import { PrayerPraise, ShareStatus } from '../../constants/enums';
import { StateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import {
  changeMessageText,
  changeMessageType,
  changeSharedStatus,
  submitMessage
} from '../Praise/actions';

interface IStateProps {
  displayMessage?: string;
  loading: boolean;
  loggedIn: boolean;
  messageText: string;
  sharedStatus: ShareStatus;
}

interface IDispatchProps {
  changeMessageText(payload: string);
  changeSharedStatus(payload: ShareStatus);
  submitMessage();
  changeMessageType();
}

function mapStateToProps(state: StateType): IStateProps {
  return {
    displayMessage: state.messages.displayMessage,
    loading: state.messages.loading,
    loggedIn: !!state.app.jwtToken && !!state.app.username,
    messageText: state.messages.messageText,
    sharedStatus: state.messages.sharedStatus
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    changeMessageText: (payload: string) => dispatch(changeMessageText(payload)),
    changeMessageType: () => dispatch(changeMessageType(PrayerPraise.PRAYER)),
    changeSharedStatus: (payload: ShareStatus) => dispatch(changeSharedStatus(payload)),
    submitMessage: () => dispatch(submitMessage())
  };
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Prayer extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.changeMessageType();
  }

  render() {
    if (this.props.loading) {
      return <LoadingSpinner />;
    }
    return (
      <SubmissionForm
        displayMessage={this.props.displayMessage}
        formType={PrayerPraise.PRAYER}
        loggedIn={this.props.loggedIn}
        messageText={this.props.messageText}
        sharedStatus={this.props.sharedStatus}
        handleChangeMessageText={(text: string) => this.props.changeMessageText(text)}
        handleChangeShareStatus={(status: ShareStatus) => this.props.changeSharedStatus(status)}
        handleSubmit={() => this.props.submitMessage()}
      />
    );
  }

}

export default withUserProfile(Prayer);
