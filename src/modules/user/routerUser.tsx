import { lazy } from '@loadable/component';
import { RouteApp } from 'core/router/router';

const User = lazy(() => import('./UserPage'));
const UserDetail = lazy(() => import('./UserDetail'));
const UserTemplate = lazy(() => import('./UserTemplate'));
import Fade from './../../components/Fade/index';
// import UserDetail from './UserDetail';
// import User from './UserPage';
// import UserTemplate from './UserTemplate';

export const routerUser: Array<RouteApp> = [
  {
    path: '/user',
    exact: true,
    main: () => (
      <Fade>
        <User />
      </Fade>
    ),
  },
  {
    path: '/user/template',
    main: () => (
      <Fade>
        <UserTemplate />
      </Fade>
    ),
  },
  {
    path: '/user/detail',
    main: () => (
      <Fade>
        <UserDetail />
      </Fade>
    ),
  },
];
