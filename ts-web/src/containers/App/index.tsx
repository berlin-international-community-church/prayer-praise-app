import * as React from 'react';
import { Route, Switch } from 'react-router';

import routeList from '../../routes';

export class App extends React.Component<any, never> {

  render() {
    return (
      <Switch>
        <Route {...routeList.base} />
        <Route {...routeList.authCallback} />
        <Route {...routeList.prayer} />
        <Route {...routeList.praise} />
        <Route {...routeList.me} />
      </Switch>
    );
  }

}
