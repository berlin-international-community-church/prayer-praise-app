import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import { fetchUserProfile, logout } from '../App/actions';
import * as styles from './styles.css';

interface IStateProps {
  auth0?: any;
  jwtToken?: string;
  accessToken: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  fetchUserProfile();
  logout();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Me extends React.Component<any, never> {

  componentDidMount() {
    this.checkProfile(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkProfile(nextProps);
  }

  checkProfile(props) {
    if (props.accessToken && props.jwtToken && !props.profilePic) {
      props.fetchUserProfile();
    }
  }

  render() {
    return (
      <Layout
        auth0={this.props.auth0}
        jwtToken={this.props.jwtToken}
        username={this.props.username}
        profilePic={this.props.profilePic}
        logout={this.props.logout}
      >
        <div className={styles.container}>
          <h2>My Data</h2>
          <LoadingSpinner />
        </div>
      </Layout>
    );
  }

}

function mapStateToProps(immutableState: any): IStateProps {
  const state = immutableState.toJS();
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
}
