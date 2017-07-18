import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import SubmissionForm from '../../components/SubmissionForm';
import { PrayerPraise } from '../../constants/enums';
import { AppStateType } from '../../constants/types';
import { fetchUserProfile, logout } from '../App/actions';
import { changeMessageText, changeMessageType, submitMessage } from './actions';

interface IStateProps { //extends RouteComponentProps<void> {
  auth0?: any;
  jwtToken?: string;
  accessToken?: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  fetchUserProfile();
  logout();
  changeMessageText(payload: string);
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

  render() {
    return (
      <Layout
        auth0={this.props.auth0}
        jwtToken={this.props.jwtToken}
        username={this.props.username}
        profilePic={this.props.profilePic}
        logout={this.props.logout}
      >
        <SubmissionForm
          formType={'praise'}
          handleChangeMessageText={(text) => this.props.changeMessageText(text)}
          handleSubmit={() => this.props.submitMessage()}
        />
      </Layout>
    );
  }
}

function mapStateToProps(immutableState: any): IStateProps {
  const state: { app: AppStateType } = immutableState.toJS();
  return {
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    accessToken: state.app.accessToken,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    logout: () => dispatch(logout()),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    changeMessageText: (payload: string) => dispatch(changeMessageText(payload)),
    submitMessage: () => dispatch(submitMessage()),
    changeMessageType: () => dispatch(changeMessageType(PrayerPraise.PRAISE))
  };
}
