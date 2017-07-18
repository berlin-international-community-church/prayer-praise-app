import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import { login, logout } from '../App/actions';

interface IStateProps { //extends RouteComponentProps<void> {
  auth0?: any;
  jwtToken?: string;
  accessToken: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  login(arg: any);
  logout();
  changeRoute(route: string);
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class AuthCallback extends React.Component<IAppProps, never> {

  handleAuthentication() {
    this.props.auth0.parseHash((err, authResult) => {
      if (err) {
        // console.error(err);
        return;
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.props.login({
          accessToken: authResult.accessToken,
          idToken: authResult.idToken,
          tokenExpiresAt: JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
        });
      }
    });
  }

  componentDidMount() {
    this.handleAuthentication();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.accessToken) {
      this.props.changeRoute('/');
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
        <LoadingSpinner />
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
    login: (payload) => dispatch(login(payload)),
    logout: () => dispatch(logout()),
    changeRoute: (route) => dispatch(push(route))
  };
}
