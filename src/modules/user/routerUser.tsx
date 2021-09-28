import { lazy } from '@loadable/component';
import { RouteApp } from 'core/router/router';

const User = lazy(() => import('./UserPage'));
const UserDetail = lazy(() => import('./UserDetail'));
const UserTemplate = lazy(() => import('./UserTemplate'));

export const routerUser: Array<RouteApp> = [
  {
    path: '/user',
    exact: true,
    main: () => <User />,
  },
  {
    path: '/user/template',
    main: () => <UserTemplate />,
  },
  {
    path: '/user/detail',
    main: () => <UserDetail />,
  },
];
