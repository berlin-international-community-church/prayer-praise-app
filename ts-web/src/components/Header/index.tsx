import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

import User from '../User';
import * as styles from './styles.css';

interface IProps {
  username?: string;
  profilePic?: string;
  jwtToken?: string;
  auth0: any;
  logout(): void;
  switchLanguage(payload: string);
}

class Header extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.heading}>
        <h1>
          <Link to="/">
            <FormattedMessage id="components.Header.main" />
          </Link>
        </h1>
        <div className={styles.options}>
          <button className={styles.language} onClick={() => this.props.switchLanguage('en')}>EN</button>
          <button className={styles.language} onClick={() => this.props.switchLanguage('de')}>DE</button>
          <User
            auth0={this.props.auth0}
            jwtToken={this.props.jwtToken}
            username={this.props.username}
            profilePic={this.props.profilePic}
            logout={this.props.logout}
          />
        </div>
      </div>
    );
  }

}

export default Header;
