import { lazy } from '@loadable/component';
import { RouteApp } from 'core/router';

const User = lazy(() => import('./UserPage'));
const UserDetail = lazy(() => import('./UserDetailPage'));
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
    path: '/user/:id',
    main: () => <UserDetail />,
  },
];
