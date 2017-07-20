import * as React from 'react';
import { connect } from 'react-redux';

import DisplayMessage from '../../components/DisplayMessage';
import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import MessageCard from '../../components/MessageCard';
import { SharedMessageType, StateType } from '../../constants/types';
import { sharedMessages } from '../../sagas/sharedMessages';
import { fetchToken, fetchUserProfile, logout } from '../App/actions';
import { fetchSharedMessages } from './actions';
import * as styles from './styles.css';

// import { RouteComponentProps } from 'react-router';

interface IStateProps { // extends RouteComponentProps<void> {
  accessToken?: string;
  auth0?: any;
  displayMessage?: string;
  jwtToken?: string;
  loading: boolean;
  sharedMessages: SharedMessageType[];
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  fetchToken();
  fetchUserProfile();
  fetchSharedMessages();
  logout();
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Root extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.fetchSharedMessages();
    this.checkAuth(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.checkAuth(nextProps);
  }

  checkAuth(props) {
    if (props.accessToken && !props.jwtToken) {
      this.props.fetchToken();
    }
    if (props.accessToken && props.jwtToken && !props.profilePic) {
      props.fetchUserProfile();
    }
  }

  displayMessages() {
    if (this.props.loading) {
      return <LoadingSpinner />;
    }
    if (this.props.displayMessage) {
      return <DisplayMessage message={this.props.displayMessage} />;
    }
    return this.props.sharedMessages.map((message) => {
      return <MessageCard message={message} key={message.id} />;
    });
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
          <h2>Welcome Church</h2>
          <button
            className={styles.reload}
            onClick={() => this.props.fetchSharedMessages()}>
            Reload
          </button>
          <div className={styles.messages}>
            { this.displayMessages() }
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(immutableState: any): IStateProps {
  const state: StateType = immutableState.toJS();
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0,
    displayMessage: state.sharedMessages.displayMessage,
    jwtToken: state.app.jwtToken,
    loading: state.sharedMessages.loading,
    profilePic: state.app.profilePic,
    sharedMessages: state.sharedMessages.messages,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    fetchSharedMessages: () => (dispatch(fetchSharedMessages())),
    fetchToken: () => (dispatch(fetchToken())),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
}
