import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import User from '../User';

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

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppHeading>
        <Title><FormattedMessage {...messages.header} /></Title>
        <User
          auth0={this.props.auth0}
          jwtToken={this.props.jwtToken}
          username={this.props.username}
          profilePic={this.props.profilePic}
          logout={this.props.logout}
        />
      </AppHeading>
    );
  }
}

Header.propTypes = {

};

export default Header;
