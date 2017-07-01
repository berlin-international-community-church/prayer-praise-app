import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import LoadingSpinner from '../../components/LoadingSpinner';

import {
  selectAuth0,
  selectLoggedIn
} from './selectors';

import {
  login
} from '../App/actions';

export class AuthCallback extends React.Component { // eslint-disable-line react/prefer-stateless-function

  handleAuthentication() {
    this.props.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.props.login({
          accessToken: authResult.accessToken,
          idToken: authResult.idToken,
          tokenExpiresAt: JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime())
        });
      }
      if (err) {
        console.error(err);
      }
    });
  }

  componentDidMount() {
    this.handleAuthentication();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.changeRoute('/home');
    }
  }

  render() {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  auth0: selectAuth0(),
  loggedIn: selectLoggedIn()
});

function mapDispatchToProps(dispatch) {
  return {
    login: (payload) => dispatch(login(payload)),
    changeRoute: (route) => dispatch(push(route))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthCallback);
