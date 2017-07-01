import React from 'react';
import styles from './styles.css';

class User extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  displayLoggedInUser() {
    return (
      <div className="userProfile">
        <img src={this.props.profilePic} alt={this.props.username} />
        <button className="loginButton" onClick={ () => this.props.logout() }>Logout</button>
      </div>
    );
  }

  displayLoggedOutUser() {
    return (
      <div className="userProfile">
        <button className="loginButton" onClick={ () => this.props.auth0.authorize() }>Login</button>
      </div>
    );
  }

  render() {
    const isLoggedIn = this.props.jwtToken && this.props.username && this.props.profilePic;
    return isLoggedIn ? this.displayLoggedInUser() : this.displayLoggedOutUser();
  }

}

export default User;
