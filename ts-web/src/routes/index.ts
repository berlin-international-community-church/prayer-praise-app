import { ComponentClass } from 'react';

import { App } from '../containers/App';

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
    component: App,
    exact: true,
    path: '/'
  }
};

export default routes;
