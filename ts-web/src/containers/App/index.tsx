import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import * as style from './style.css';

import Layout from '../../components/Layout';

import { IRootState } from '../../reducers';
import {
  fetchUserProfile
} from '../Home/actions';

interface IProps extends RouteComponentProps<void> {
  fetchUserProfile: () => {};
}

interface IState {
  auth0: any;
  jwtToken: string;
  username: string;
  profilePic: string;
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<IProps, IState> {

  componentDidMount() {
    this.props.fetchUserProfile();
  }

  render() {
    return (
      <Layout>
        <div>
          <h1>Hi</h1>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state: IRootState) {
  return {
    auth0: state.app.auth0,
    jwtToken: state.app.jwtToken,
    profilePic: state.app.profilePic,
    username: state.app.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUserProfile: () => dispatch(fetchUserProfile())
  };
}
