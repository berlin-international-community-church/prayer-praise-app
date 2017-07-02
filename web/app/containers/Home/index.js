import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectUserName,
  selectJwtToken
} from './selectors';

import { selectAccessToken } from '../App/selectors';

import {
  fetchToken
} from './actions';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.check(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.check(nextProps);
  }

  check(props) {
    if (!props.accessToken && !props.jwtToken) {
      props.changeRoute('/');
    }
    if (props.accessToken && !props.jwtToken) {
      props.fetchToken();
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Welcome" />
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  accessToken: selectAccessToken(),
  jwtToken: selectJwtToken(),
  username: selectUserName()
});

function mapDispatchToProps(dispatch) {
  return {
    fetchToken: () => dispatch(fetchToken()),
    changeRoute: (route) => dispatch(push(route))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
