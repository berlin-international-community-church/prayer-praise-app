import * as React from 'react';
import { Route, Switch } from 'react-router';

import routeList from '../../routes';
import { LanguageProvider } from '../LanguageProvider';

export class App extends React.Component<any, never> {

  render() {
    return (
      <LanguageProvider locale={'en'}>
        <Switch>
          <Route {...routeList.base} />
          <Route {...routeList.authCallback} />
          <Route {...routeList.editMessage} />
          <Route {...routeList.prayer} />
          <Route {...routeList.praise} />
          <Route {...routeList.me} />
        </Switch>
      </LanguageProvider>
    );
  }

}
