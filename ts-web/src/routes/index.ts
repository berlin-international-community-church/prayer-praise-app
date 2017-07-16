import { ComponentClass } from 'react';

import { Root } from '../containers/Root';
import { Prayer } from '../containers/Prayer';
import { Praise } from '../containers/Praise';
import { AuthCallback } from '../containers/AuthCallback';

interface IRouteDefinition {
  exact: boolean;
  path: string;
  component: ComponentClass<any>;
}

interface IRoutes {
  [propName: string]: IRouteDefinition;
}

const routes: IRoutes = {
  base: {
    component: Root,
    exact: true,
    path: '/'
  },
  authCallback: {
    component: AuthCallback,
    exact: true,
    path: '/authCallback'
  },
  prayer: {
    component: Prayer,
    exact: true,
    path: '/prayer'
  },
  praise: {
    component: Praise,
    exact: true,
    path: '/praise'
  }
};

export default routes;
