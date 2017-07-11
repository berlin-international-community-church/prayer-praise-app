import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import * as style from './style.css';
import Layout from '../../components/Layout';

import { IRootState } from '../../reducers';
import {
  logout,
  fetchUserProfile
} from './actions';

interface IProps extends RouteComponentProps<void> {
  auth0: any;
  jwtToken: string;
  username: string;
  profilePic: string;
  fetchUserProfile(): void;
  logout(): void;
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<IProps, {}> {

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

function mapStateToProps(state: IRootState) {
  return {
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
}
