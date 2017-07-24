import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import Layout from '../../components/Layout';
import LoadingSpinner from '../../components/LoadingSpinner';
import SubmissionForm from '../../components/SubmissionForm';

import { PrayerPraise, ShareStatus } from '../../constants/enums';
import { SharedMessageType, StateType } from '../../constants/types';

import { fetchUserProfile, logout } from '../App/actions';
import { changeMessageText, changeMessageType, changeSharedStatus } from '../Praise/actions';
// tslint:disable-next-line:ordered-imports
import { editMessage, updateMessage } from '../Me/actions';

import * as styles from '../Me/styles.css';

interface IStateProps {
  accessToken?: string;
  auth0?: any;
  displayMessage?: string;
  jwtToken?: string;
  messageForEdit?: SharedMessageType;
  username?: string;
  profilePic?: string;
  loading: boolean;
}

interface IRouteParams {
  id: number;
}

interface IDispatchProps {
  changeMessageText(payload: string);
  changeMessageType();
  changeSharedStatus(payload: ShareStatus);
  editMessage(payload: number);
  fetchUserProfile();
  logout();
  updateMessage();
}

type IAppProps = IStateProps & RouteComponentProps<IRouteParams> & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class EditMessage extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.checkProfile(this.props);
    this.props.editMessage(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    this.checkProfile(nextProps);
  }

  checkProfile(props) {
    if (props.accessToken && props.jwtToken && !props.profilePic) {
      props.fetchUserProfile();
    }
  }

  convertStatus(status): ShareStatus {
    return {
      SHARED_WITH_EVERYONE: ShareStatus.SHARED_WITH_EVERYONE,
      SHARED_WITH_NOONE: ShareStatus.SHARED_WITH_NOONE,
      SHARED_WITH_PRAYER_TEAM: ShareStatus.SHARED_WITH_PRAYER_TEAM
    }[status];
  }

  renderContainer() {
    if (this.props.loading || !this.props.messageForEdit) {
      return <LoadingSpinner />;
    }
    return (
      <div className={styles.container}>
        <h2>Edit</h2>
        <SubmissionForm
          displayMessage={this.props.displayMessage}
          formType={this.props.messageForEdit.messageType}
          messageText={this.props.messageForEdit.messageText}
          sharedStatus={this.convertStatus(this.props.messageForEdit.sharedStatus)}
          handleChangeMessageText={(text: string) => this.props.changeMessageText(text)}
          handleChangeShareStatus={(status: ShareStatus) => this.props.changeSharedStatus(status)}
          handleSubmit={() => this.props.updateMessage()}
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
    displayMessage: state.myData.displayMessage,
    jwtToken: state.app.jwtToken,
    loading: state.myData.loading,
    messageForEdit: state.myData.messageForEdit,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    changeMessageText: (payload: string) => dispatch(changeMessageText(payload)),
    changeMessageType: () => dispatch(changeMessageType(PrayerPraise.PRAISE)),
    changeSharedStatus: (payload: ShareStatus) => dispatch(changeSharedStatus(payload)),
    editMessage: (payload) => dispatch(editMessage(payload)),
    fetchUserProfile: () => dispatch(fetchUserProfile()),
    logout: () => dispatch(logout()),
    updateMessage: () => dispatch(updateMessage())
  };
}
