import { lazy } from '@loadable/component';
const HomePage = lazy(() => import('modules/home'));
const User = lazy(() => import('modules/user/UserPage'));
const UserDetail = lazy(() => import('modules/user/UserDetailPage'));

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
  {
    path: '/user',
    exact: true,
    main: () => <User />,
  },
  {
    path: '/user/template',
    main: () => <User />,
  },
  {
    path: '/user/:id',
    main: () => <UserDetail />,
  },
];
