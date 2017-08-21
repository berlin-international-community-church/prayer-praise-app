import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import { StateType } from '../../constants/types';
import {
  fetchToken, fetchUserProfile,
  logout, resetSidebar, switchLanguage,
  toggleSidebar } from '../App/actions';
import * as styles from './styles.css';

interface IStateProps {
  accessToken?: string;
  auth0?: any;
  jwtToken?: string;
  username?: string;
  profilePic?: string;
  sidebarVisible: boolean;
}

interface IDispatchProps {
  fetchToken();
  fetchUserProfile();
  logout();
  switchLanguage(payload: string);
  resetSidebar();
  toggleSidebar();
}

function mapStateToProps(state: StateType, ownProps: any): IStateProps {
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    profilePic: state.app.profilePic,
    sidebarVisible: state.app.sidebarVisible,
    username: state.app.username,
    ...ownProps
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    fetchToken: () => (dispatch(fetchToken())),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout()),
    resetSidebar: () => dispatch(resetSidebar()),
    switchLanguage: (payload: string) => dispatch(switchLanguage(payload)),
    toggleSidebar: () => dispatch(toggleSidebar())
  };
}

export const withUserProfile = (WrappedComponent) => {

  class Main extends React.Component<any, never> {

    componentDidMount() {
      this.checkAuth(this.props);
      this.props.resetSidebar();
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
          sidebarVisible={this.props.sidebarVisible}
          switchLanguage={this.props.switchLanguage}
          toggleSidebar={this.props.toggleSidebar}
        >
          <div className={styles.container}>
            <WrappedComponent match={this.props.match} />
          </div>
        </Layout>
      );
    }

  }

  return connect(mapStateToProps, mapDispatchToProps)(Main);

};
