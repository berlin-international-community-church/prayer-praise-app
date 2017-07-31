import * as React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import Sidebar from '../Sidebar';
import * as styles from './styles.css';

interface IProps {
  username?: string;
  profilePic?: string;
  jwtToken?: string;
  auth0: any;
  children?: any;
  logout(): void;
  switchLanguage(payload: string);
}

class Layout extends React.PureComponent<IProps> {

  render() {
    return (
      <div className={styles.container}>
        <Header
          auth0={this.props.auth0}
          jwtToken={this.props.jwtToken}
          username={this.props.username}
          profilePic={this.props.profilePic}
          logout={this.props.logout}
          switchLanguage={this.props.switchLanguage}
        />
        <div className={styles.page}>
          <Sidebar loggedIn={!!this.props.jwtToken && !!this.props.profilePic}/>
          <div className={styles.main}>
            { React.Children.toArray(this.props.children) }
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default Layout;
