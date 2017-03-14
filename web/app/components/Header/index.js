import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppHeading = styled.div`
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
      </AppHeading>
    );
  }
}

Header.propTypes = {

};

export default Header;
