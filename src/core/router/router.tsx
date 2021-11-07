import { lazy } from '@loadable/component';
import { NotFound } from 'modules/notfound';
import { routerUser } from 'modules/user/routerUser';
import { Redirect } from 'react-router-dom';
import UserDetail from './../../modules/user/UserDetail/index';
import Login from 'modules/login';
// const HomePage = lazy(() => import('modules/home'));

import HomePage from 'modules/home';
import Example from 'modules/Example';



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
            <Example />
        ),
    },
    {
        path: '/product',
        main: () => (
            <UserDetail />
        ),
    },
    {
        path: '/product/detail',
        main: () => (
            <UserDetail />
        ),
    },
    {
        path: '/login',
        exact: true,
        main: () => (
            <Login />
        ),
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
