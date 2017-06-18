import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import styles from './styles.css';

class Sidebar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="sidebar">
        <ul className="sidelinks">
          <li>
            <Link to="/">
              <FormattedMessage {...messages.home} />
            </Link>
          </li>
          <li>
            <Link to="/prayer">
              <FormattedMessage {...messages.prayer} />
            </Link>
          </li>
          <li>
            <Link to="/praise">
              <FormattedMessage {...messages.praise} />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {

};

export default Sidebar;
