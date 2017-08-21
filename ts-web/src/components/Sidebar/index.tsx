import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import * as styles from './styles.css';

interface IProps {
  sidebarVisible: boolean;
  loggedIn: boolean;
}

class Sidebar extends React.PureComponent<IProps, {}> {

  render() {
    return (
      <div className={this.props.sidebarVisible ? styles.sidebar : styles.visibleSidebar}>
        <ul className={styles.sidelinks}>
          <li>
            <Link to="/">
              <FormattedMessage id="component.Sidebar.homeLink" />
            </Link>
          </li>
          <li>
            <Link to="/prayer">
              <FormattedMessage id="component.Sidebar.prayerLink" />
            </Link>
          </li>
          <li>
            <Link to="/praise">
              <FormattedMessage id="component.Sidebar.praiseLink" />
            </Link>
          </li>
          { this.props.loggedIn ?
            <li><Link to="/me">
              <FormattedMessage id="component.Sidebar.meLink" />
            </Link></li> :
            <li/> }
        </ul>
      </div>
    );
  }

}

export default Sidebar;
