import * as React from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import MessageCard from '../../components/MessageCard';
import { PrayerPraise } from '../../constants/enums';
import { AppStateType } from '../../constants/types';
import { fetchToken, fetchUserProfile, logout } from '../App/actions';
import * as styles from './styles.css';

// import { RouteComponentProps } from 'react-router';

interface IStateProps { // extends RouteComponentProps<void> {
  auth0?: any;
  jwtToken?: string;
  accessToken?: string;
  username?: string;
  profilePic?: string;
}

interface IDispatchProps {
  fetchToken();
  fetchUserProfile();
  logout();
}

type IAppProps = IStateProps & IDispatchProps;

const sampleData = [
  { id: 1, messageType: PrayerPraise.PRAYER, messageText: 'Help in my exams.' },
  { id: 2, messageType: PrayerPraise.PRAYER, messageText: 'Healing from a sickness.' },
  { id: 3, messageType: PrayerPraise.PRAYER, messageText: 'Getting a visa.' },
  { id: 4, messageType: PrayerPraise.PRAYER, messageText: 'Finding a job.' },
  { id: 5, messageType: PrayerPraise.PRAISE, messageText: 'God\'s amazing love!'},
  { id: 6, messageType: PrayerPraise.PRAISE, messageText: 'Healing from a sickness.' },
  { id: 7, messageType: PrayerPraise.PRAISE, messageText: 'Promotion at job.' },
  { id: 8, messageType: PrayerPraise.PRAISE, messageText: 'Food at my table.' }
];

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Root extends React.Component<IAppProps, never> {

  componentDidMount() {
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
    return sampleData.map((message) => {
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
        <div className={styles.messages}>
          { this.displayMessages() }
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(immutableState: any): IStateProps {
  const state: { app: AppStateType } = immutableState.toJS();
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
    fetchToken: () => (dispatch(fetchToken())),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout())
  };
}
