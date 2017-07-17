import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { fetchToken, fetchUserProfile, logout } from '../App/actions';

// import { RouteComponentProps } from 'react-router';

interface IStateProps { // extends RouteComponentProps<void> {
  auth0?: any;
  jwtToken?: string;
  accessToken?: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  fetchToken();
  fetchUserProfile();
  logout();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Root extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.checkAuth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth(nextProps);
  }

  checkAuth(props) {
    if (props.accessToken && !props.jwtToken) {
      this.props.fetchToken();
    }
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
        <h1>Hi</h1>
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
    fetchToken: () => (dispatch(fetchToken())),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
}
