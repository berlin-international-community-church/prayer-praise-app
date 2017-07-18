import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import SubmissionForm from '../../components/SubmissionForm';
import { PrayerPraise, ShareStatus } from '../../constants/enums';
import { StateType } from '../../constants/types';
import { fetchUserProfile, logout } from '../App/actions';
import { changeMessageText, changeMessageType, changeSharedStatus, submitMessage } from './actions';

interface IStateProps { // extends RouteComponentProps<void> {
  accessToken?: string;
  auth0?: any;
  displayMessage?: string;
  jwtToken?: string;
  loading: boolean;
  messageText: string;
  profilePic?: string;
  sharedStatus: ShareStatus;
  username?: string;
}

interface IDispatchProps {
  fetchUserProfile();
  logout();
  changeMessageText(payload: string);
  changeSharedStatus(payload: ShareStatus);
  submitMessage();
  changeMessageType();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Praise extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.changeMessageType();
    this.checkProfile(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkProfile(nextProps);
  }

  checkProfile(props) {
    if (props.accessToken && props.jwtToken && !props.profilePic) {
      props.fetchUserProfile();
    }
  }

  renderForm() {
    if (this.props.loading) {
      return <LoadingSpinner />;
    }
    return (
      <SubmissionForm
        displayMessage={this.props.displayMessage}
        formType={'praise'}
        messageText={this.props.messageText}
        sharedStatus={this.props.sharedStatus}
        handleChangeMessageText={(text: string) => this.props.changeMessageText(text)}
        handleChangeShareStatus={(status: ShareStatus) => this.props.changeSharedStatus(status)}
        handleSubmit={() => this.props.submitMessage()}
      />
    );
  }

  render() {
    return (
      <Layout
        auth0={this.props.auth0}
        jwtToken={this.props.jwtToken}
        username={this.props.username}
        profilePic={this.props.profilePic}
        logout={this.props.logout}
      >
        { this.renderForm() }
      </Layout>
    );
  }
}

function mapStateToProps(immutableState: any): IStateProps {
  const state: StateType = immutableState.toJS();
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0,
    displayMessage: state.messages.displayMessage,
    jwtToken: state.app.jwtToken,
    loading: state.messages.loading,
    messageText: state.messages.messageText,
    profilePic: state.app.profilePic,
    sharedStatus: state.messages.sharedStatus,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    changeMessageText: (payload: string) => dispatch(changeMessageText(payload)),
    changeMessageType: () => dispatch(changeMessageType(PrayerPraise.PRAISE)),
    changeSharedStatus: (payload: ShareStatus) => dispatch(changeSharedStatus(payload)),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout()),
    submitMessage: () => dispatch(submitMessage())
  };
}
