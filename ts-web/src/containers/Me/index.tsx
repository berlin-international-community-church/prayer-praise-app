import * as React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { push } from 'react-router-redux';

import LoadingSpinner from '../../components/LoadingSpinner';
import MyMessages from '../../components/MyMessages';
import { SharedMessageType, StateType } from '../../constants/types';
import { withUserProfile } from '../Main';
import { deleteMessage, fetchMyMessages, setMessageToEdit } from './actions';
import * as styles from './styles.css';

interface IStateProps {
  loading: boolean;
  loggedIn: boolean;
  messages: SharedMessageType[];
}

interface IDispatchProps {
  changeRoute(route: string);
  deleteMessage(payload: number);
  fetchMyMessages();
  setMessageToEdit(payload: number);
}

function mapStateToProps(immutableState: any): IStateProps {
  const state: StateType = immutableState.toJS();
  return {
    loading: state.myData.loading,
    loggedIn: !!state.app.jwtToken,
    messages: state.myData.myMessages
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    changeRoute: (route) => dispatch(push(route)),
    deleteMessage: (payload) => dispatch(deleteMessage(payload)),
    fetchMyMessages: () => dispatch(fetchMyMessages()),
    setMessageToEdit: (payload) => dispatch(setMessageToEdit(payload))
  };
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class Me extends React.Component<IAppProps, never> {

  componentDidMount() {
    this.props.fetchMyMessages();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn) {
      this.props.changeRoute('/');
    }
  }

  render() {
    if (this.props.loading || !this.props.messages) {
      return <LoadingSpinner />;
    }
    return (
      <div className={styles.container}>
        <h2><FormattedMessage id="container.Me.heading" /></h2>
        <MyMessages
          messages={this.props.messages}
          deleteMessage={this.props.deleteMessage}
          editMessage={ (id: number, path: string) => {
            this.props.setMessageToEdit(id);
            this.props.changeRoute(path);
          }}
        />
      </div>
    );
  }

}

export default withUserProfile(Me);
