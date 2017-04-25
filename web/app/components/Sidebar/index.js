import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.scss';

// const SidebarContainer = styled.div`
//   background-color: #292929;
//   color: #FFFFFF;
//   padding: 10px;
// `;

// const LinkList = styled.ul`
//   list-style: none;
//   padding-left: 0;
//
//   li {
//     padding-bottom: 100px;
//   }
//
//   li a {
//     color: #FFFFFF;
//     text-decoration: none;
//   }
// `;

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
