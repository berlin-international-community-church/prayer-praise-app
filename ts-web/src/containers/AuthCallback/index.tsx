import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import LoadingSpinner from '../../components/LoadingSpinner';
import { StateType } from '../../constants/types';
import { login } from '../App/actions';
import * as styles from './styles.css';

interface IStateProps {
  accessToken?: string | null;
  auth0?: any;
}

interface IDispatchProps {
  login(arg: any);
  changeRoute(route: string);
}

type IAppProps = IStateProps & IDispatchProps;

@connect<IStateProps, IDispatchProps>(mapStateToProps, mapDispatchToProps)
export class AuthCallback extends React.Component<IAppProps, never> {

  handleAuthentication() {
    this.props.auth0.parseHash((err, authResult) => {
      if (err) {
        // console.error(err);
        return;
      }
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.props.login({
          accessToken: authResult.accessToken,
          idToken: authResult.idToken,
          tokenExpiresAt: JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
        });
      }
    });
  }

  componentDidMount() {
    this.handleAuthentication();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.accessToken) {
      this.props.changeRoute('/');
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <LoadingSpinner />
      </div>
    );
  }
}

function mapStateToProps(state: StateType): IStateProps {
  return {
    accessToken: state.app.accessToken,
    auth0: state.app.auth0
  };
}

function mapDispatchToProps(dispatch): IDispatchProps {
  return {
    changeRoute: (route) => dispatch(push(route)),
    login: (payload) => dispatch(login(payload))
  };
}
