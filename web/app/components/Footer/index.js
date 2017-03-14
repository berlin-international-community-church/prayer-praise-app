import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const AppFooter = styled.div`
  background-color: #E10827;
  color: #FFFFFF;
  padding: 10px;
`;

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppFooter>
        <FormattedMessage {...messages.header} />
      </AppFooter>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
