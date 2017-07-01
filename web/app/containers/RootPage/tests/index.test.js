import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import RootPage from '../index';
import messages from '../messages';

describe('<RootPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <RootPage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
