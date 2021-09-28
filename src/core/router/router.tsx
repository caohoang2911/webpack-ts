import { lazy } from '@loadable/component';
import { NotFound } from 'modules/notfound';
import { routerUser } from 'modules/user/routerUser';
const HomePage = lazy(() => import('modules/home'));
import { Redirect } from 'react-router-dom';
import TodoApp from './../../modules/todos/index';
import UserDetail from './../../modules/user/UserDetail/index';

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
    main: () => <TodoApp />,
  },
  {
    path: '/couter',
    main: () => <HomePage />,
  },
  {
    path: '/detail',
    main: () => <UserDetail />,
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
