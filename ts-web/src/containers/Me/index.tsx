import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import MyMessages from '../../components/MyMessages';
import { SharedMessageType, StateType } from '../../constants/types';
import { fetchUserProfile, logout } from '../App/actions';
import { deleteMessage, fetchMyMessages } from './actions';
import * as styles from './styles.css';

interface IStateProps {
  auth0?: any;
  jwtToken?: string;
  accessToken?: string;
  username?: string;
  profilePic?: string;
  loading: boolean;
  messages: SharedMessageType[];
}

interface IDispatchProps {
  fetchMyMessages();
  fetchUserProfile();
  deleteMessage(payload: any);
  logout();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Me extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.checkProfile(this.props);
    this.props.fetchMyMessages();
  }

  componentWillReceiveProps(nextProps) {
    this.checkProfile(nextProps);
  }

  checkProfile(props) {
    if (props.accessToken && props.jwtToken && !props.profilePic) {
      props.fetchUserProfile();
    }
  }

  renderContainer() {
    if (this.props.loading || !this.props.messages) {
      return <LoadingSpinner />;
    }
    return (
      <div className={styles.container}>
        <h2>My Data</h2>
        <MyMessages
          messages={this.props.messages}
          deleteMessage={this.props.deleteMessage}
        />
      </div>
    );
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
        { this.renderContainer() }
      </Layout>
    );
  }

}

function mapStateToProps(immutableState: any): IStateProps {
  const state: StateType = immutableState.toJS();
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    loading: state.myData.loading,
    messages: state.myData.myMessages,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    deleteMessage: (payload) => dispatch(deleteMessage(payload)),
    fetchMyMessages: () => dispatch(fetchMyMessages()),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
}
