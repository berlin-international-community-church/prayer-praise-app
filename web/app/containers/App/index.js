import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Sidebar from './../../components/Sidebar';

import {
  selectAuth0
} from './selectors';

import {
  selectUserName,
  selectProfilePic,
  selectJwtToken
} from '../Home/selectors';

import {
  fetchUserProfile
} from '../Home/actions';

import {
  logout
} from './actions';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vw;
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.checkAuth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth(nextProps);
  }

  checkAuth(props) {
    if (props.jwtToken && !props.username) {
      props.fetchUserProfile();
    }
  }

  render() {
    return (
      <Container>
        <Header
          auth0={this.props.auth0}
          jwtToken={this.props.jwtToken}
          username={this.props.username}
          profilePic={this.props.profilePic}
          logout={this.props.logout}
        />
        <Page>
          <Sidebar />
          { React.Children.toArray(this.props.children) }
        </Page>
        <Footer />
      </Container>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  auth0: selectAuth0(),
  jwtToken: selectJwtToken(),
  username: selectUserName(),
  profilePic: selectProfilePic()
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
    fetchUserProfile: () => dispatch(fetchUserProfile())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
