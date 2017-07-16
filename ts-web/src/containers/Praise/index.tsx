import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import Layout from '../../components/Layout';
import SubmissionForm from '../../components/SubmissionForm';
import { fetchUserProfile, logout } from '../App/actions';

interface IStateProps { //extends RouteComponentProps<void> {
  auth0?: any;
  jwtToken?: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  logout();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Praise extends React.Component<IAppProps, never> {

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
          handleChangeMessageText={() => {}}
          handleSubmit={() => {}}
        />
      </Layout>
    );
  }
}

function mapStateToProps(immutableState: any): IStateProps {
  const state = immutableState.toJS();
  return {
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    logout: () => dispatch(logout())
  };
}
