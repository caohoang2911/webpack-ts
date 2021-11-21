import { lazy } from '@loadable/component';
import { NotFound } from 'modules/notfound';
import { Redirect } from 'react-router-dom';
import UserDetail from './../../modules/user/UserDetail/index';
import Login from 'modules/login';
// const HomePage = lazy(() => import('modules/home'));

import HomePage from 'modules/home';
import Example from 'modules/Example';

export interface RouteApp {
    path: string;
    exact?: boolean;
    name?: string;
    strict?: boolean;
    Component?: any;
}
export const routerApp: Array<RouteApp> = [
    {
        path: '/',
        exact: true,
        name: 'Home',
        Component: Example,
    },
    {
        path: '/product',
        name: 'Product',
        exact: true,
        Component: UserDetail,
    },
    {
        path: '/product/:id',
        exact: true,
        name: 'Product Detail',
        Component: Example,
    },
    {
        path: '/product/:id/:salary',
        name: 'Product Salary',
        Component: Example,
    },

    // {
    //     path: '/login',
    //     exact: true,
    //     main: () => (
    //         <Login />
    //     ),
    // },
    // ...routerUser,
    // {
    //     path: '*',
    //     main: () => <Redirect to="/notfound" />,
    // },
];

export const emptyRouter: Array<RouteApp> = [
    {
        path: '/notfound',
        Component: () => <NotFound />,
    },
];
