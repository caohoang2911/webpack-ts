import { lazy } from '@loadable/component';
import { routerUser } from 'modules/user/routerUser';
const HomePage = lazy(() => import('modules/home'));
import { NotFound } from './../modules/notfound/index';
import { Redirect } from 'react-router-dom';

export interface RouteApp {
  path: string;
  exact?: boolean;
  strict?: boolean;
  main?: () => JSX.Element;
}
export const routerApp: Array<RouteApp> = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />,
  },
  ...routerUser,
  {
    path: '*',
    main: () => <Redirect to="/notfound" />,
  },
];

export const emptyRouter: Array<RouteApp> = [
  {
    path: '/notfound',
    main: () => <NotFound />,
  },
];
