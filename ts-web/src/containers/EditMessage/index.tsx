import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

import LoadingSpinner from '../../components/LoadingSpinner';
import SubmissionForm from '../../components/SubmissionForm';
import { ShareStatus } from '../../constants/enums';
import { MessageForEdit, StateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import {
  changeExistingMessageSharedStatus,
  changeExistingMessageText,
  editMessage,
  updateMessage
} from '../Me/actions';
import * as styles from '../Me/styles.css';

interface IStateProps {
  displayMessage?: string;
  messageForEdit: MessageForEdit;
  loading: boolean;
}

interface IRouteParams {
  id: number;
}

interface IDispatchProps {
  changeMessageText(payload: string);
  changeSharedStatus(payload: ShareStatus);
  editMessage(payload: number);
  updateMessage();
}

type IAppProps = IStateProps & RouteComponentProps<IRouteParams> & IDispatchProps;

function mapStateToProps(state: StateType): IStateProps {
  return {
    displayMessage: state.myData.displayMessage,
    loading: state.myData.loading,
    messageForEdit: state.myData.messageForEdit || {}
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    changeMessageText: (payload: string) => dispatch(changeExistingMessageText(payload)),
    changeSharedStatus: (payload: ShareStatus) => dispatch(changeExistingMessageSharedStatus(payload)),
    editMessage: (payload) => dispatch(editMessage(payload)),
    updateMessage: () => dispatch(updateMessage())
  };
}

const convertStatus = (status): ShareStatus => {
  return {
    0: ShareStatus.SHARED_WITH_EVERYONE,
    1: ShareStatus.SHARED_WITH_NOONE,
    2: ShareStatus.SHARED_WITH_PRAYER_TEAM
  }[status];
};

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class EditMessage extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.editMessage(this.props.messageForEdit.id || this.props.match.params.id);
  }

  render() {
    if (this.props.loading || !this.props.messageForEdit) {
      return <LoadingSpinner />;
    }
    return (
      <div className={styles.container}>
        <SubmissionForm
          displayMessage={this.props.displayMessage}
          formType={this.props.messageForEdit.messageType}
          loggedIn={true}
          messageText={this.props.messageForEdit.newText}
          sharedStatus={convertStatus(this.props.messageForEdit.newSharedStatus)}
          handleChangeMessageText={(text: string) => this.props.changeMessageText(text)}
          handleChangeShareStatus={(status: ShareStatus) => this.props.changeSharedStatus(status)}
          handleSubmit={() => this.props.updateMessage()}
        />
      </div>
    );
  }

}

export default withUserProfile(EditMessage);
