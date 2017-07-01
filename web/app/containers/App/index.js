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

  render() {
    return (
      <Container>
        <Header auth0={this.props.auth0}/>
        <Page>
          <Sidebar />
          {React.Children.toArray(this.props.children)}
        </Page>
        <Footer />
      </Container>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  auth0: selectAuth0(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
