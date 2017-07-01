import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const Page = styled.div`
  display: flex;
  background-color: #FFFFFF;
`;

export default class RootPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page />
    );
  }
}
