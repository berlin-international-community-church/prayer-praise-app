import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import SubmissionForm from '../../components/SubmissionForm';
import { fetchUserProfile, logout } from '../App/actions';

interface IStateProps { //extends RouteComponentProps<void> {
  auth0?: any;
  jwtToken?: string;
  accessToken?: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  logout();
  fetchUserProfile();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Prayer extends React.Component<IAppProps, never> {

  componentDidMount() {
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
          formType={'prayer'}
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
    accessToken: state.app.accessToken,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
}
