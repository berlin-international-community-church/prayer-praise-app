import { ComponentClass } from 'react';

import { AuthCallback } from '../containers/AuthCallback';
import { Praise } from '../containers/Praise';
import { Prayer } from '../containers/Prayer';
import { Root } from '../containers/Root';

interface IRouteDefinition {
  exact: boolean;
  path: string;
  component: ComponentClass<any>;
}

interface IRoutes {
  [propName: string]: IRouteDefinition;
}

const routes: IRoutes = {
  authCallback: {
    component: AuthCallback,
    exact: true,
    path: '/authCallback'
  },
  base: {
    component: Root,
    exact: true,
    path: '/'
  },
  praise: {
    component: Praise,
    exact: true,
    path: '/praise'
  },
  prayer: {
    component: Prayer,
    exact: true,
    path: '/prayer'
  }
};

export default routes;
