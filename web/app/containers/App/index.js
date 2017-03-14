/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import styled from 'styled-components';

import Header from './../../components/Header';
import Footer from './../../components/Footer';
import Sidebar from './../../components/Sidebar';

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

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Container>
        <Header />
        <Page>
          <Sidebar />
          {React.Children.toArray(this.props.children)}
        </Page>
        <Footer />
      </Container>
    );
  }
}
