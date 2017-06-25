import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import {
  fetchToken
} from './actions';

export class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.fetchToken();
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
});

function mapDispatchToProps(dispatch) {
  return {
    fetchToken: () => dispatch(fetchToken())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
