
import { NotFound } from 'modules/notfound';
import UserDetail from './../../modules/user/UserDetail/index';




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
        Component: UserDetail,
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
        Component: UserDetail,
    },
    {
        path: '/product/:id/:salary',
        name: 'Product Salary',
        Component: UserDetail,
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
