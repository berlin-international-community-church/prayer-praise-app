import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import { IRootState } from '../../reducers';
import { fetchUserProfile, logout } from './actions';

interface IStateProps {
  auth0: any;
  jwtToken?: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  fetchUserProfile();
  logout();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.fetchUserProfile();
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

function mapStateToProps(state: IRootState): IStateProps {
  return {
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
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
