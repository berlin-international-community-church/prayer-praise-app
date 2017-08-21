import * as React from 'react';

import ExpandButton from '../ExpandButton';
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
  sidebarVisible: boolean;
  logout(): void;
  switchLanguage(payload: string);
  toggleSidebar();
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
          <Sidebar
            loggedIn={!!this.props.jwtToken && !!this.props.profilePic}
            sidebarVisible={this.props.sidebarVisible}
          />
          <div className={styles.main}>
            { React.Children.toArray(this.props.children) }
          </div>
          <ExpandButton toggleSidebar={this.props.toggleSidebar}/>
        </div>
        <Footer />
      </div>
    );
  }

}

export default Layout;
