import { lazy } from '@loadable/component';
import { NotFound } from 'modules/notfound';
import Query from 'modules/query';
import { routerUser } from 'modules/user/routerUser';
import { Redirect } from 'react-router-dom';
import UserDetail from './../../modules/user/UserDetail/index';
const HomePage = lazy(() => import('modules/home'));
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import productService from './../../services/productService';

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
    main: () => (
      <ApiProvider api={productService}>
        <Query />
      </ApiProvider>
    ),
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
