import * as React from 'react';
import { connect } from 'react-redux';

import DisplayMessage from '../../components/DisplayMessage';
import LoadingSpinner from '../../components/LoadingSpinner';
import MessageCard from '../../components/MessageCard';
import { SharedMessageType, StateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import { fetchSharedMessages } from './actions';
import * as styles from './styles.css';

interface IStateProps {
  displayMessage?: string;
  loading: boolean;
  sharedMessages: SharedMessageType[];
}

interface IDispatchProps {
  fetchSharedMessages();
}

function mapStateToProps(immutableState: any): IStateProps {
  const state: StateType = immutableState.toJS();
  return {
    displayMessage: state.sharedMessages.displayMessage,
    loading: state.sharedMessages.loading,
    sharedMessages: state.sharedMessages.messages
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    fetchSharedMessages: () => (dispatch(fetchSharedMessages()))
  };
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Root extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.fetchSharedMessages();
  }

  render() {
    if (this.props.loading) {
      return <LoadingSpinner />;
    }
    if (this.props.displayMessage) {
      return <DisplayMessage message={this.props.displayMessage} />;
    }
    return (
      <div className={styles.container}>
        <h2>Welcome Church</h2>
        <button
          className={styles.reload}
          onClick={() => this.props.fetchSharedMessages()}>
          Reload
        </button>
        <div className={styles.messages}>
          { this.props.sharedMessages.map((msg) => <MessageCard message={msg} key={msg.id} />) }
        </div>
      </div>
    );
  }

}

export default withUserProfile(Root);
