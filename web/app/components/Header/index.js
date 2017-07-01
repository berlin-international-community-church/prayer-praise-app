import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppHeading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #E10827;
  color: #FFFFFF;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 0;
`;

const LoginButton = styled.button`
  background-color: white;
  color: #E10827;
  border-radius: 1px;
  padding: 5px;
`;

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppHeading>
        <Title><FormattedMessage {...messages.header} /></Title>
        <LoginButton onClick={ () => this.props.auth0.authorize() }>Login</LoginButton>
      </AppHeading>
    );
  }
}

Header.propTypes = {

};

export default Header;
