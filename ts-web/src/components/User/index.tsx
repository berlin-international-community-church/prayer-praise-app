import * as React from 'react';
import * as styles from './styles.css';

interface IProps {
  username: string;
  profilePic: string;
  jwtToken: string;
  auth0: any;
  logout(): void;
}

class User extends React.PureComponent<IProps> {

  displayLoggedInUser() {
    return (
      <div className={styles.userProfile}>
        <img src={this.props.profilePic} alt={this.props.username} />
        <button onClick={ () => this.props.logout() }>Logout</button>
      </div>
    );
  }

  displayLoggedOutUser() {
    return (
      <div className={styles.userProfile}>
        <button onClick={ () => this.props.auth0.authorize() }>Login</button>
      </div>
    );
  }

  render() {
    const isLoggedIn = this.props.jwtToken && this.props.username && this.props.profilePic;
    return isLoggedIn ? this.displayLoggedInUser() : this.displayLoggedOutUser();
  }

}

export default User;
