import * as React from 'react';
import { Link } from 'react-router-dom';

import User from '../User';
import * as styles from './styles.css';

interface IProps {
  username?: string;
  profilePic?: string;
  jwtToken?: string;
  auth0: any;
  logout(): void;
}

class Header extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.heading}>
        <h1><Link to="/">Hello</Link></h1>
        <User
          auth0={this.props.auth0}
          jwtToken={this.props.jwtToken}
          username={this.props.username}
          profilePic={this.props.profilePic}
          logout={this.props.logout}
        />
      </div>
    );
  }

}

export default Header;
