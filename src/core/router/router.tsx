import { lazy } from '@loadable/component';
import { NotFound } from 'modules/notfound';
import { routerUser } from 'modules/user/routerUser';
import { Redirect } from 'react-router-dom';
import UserDetail from './../../modules/user/UserDetail/index';
import Login from 'modules/login';
const HomePage = lazy(() => import('modules/home'));
import Fade from 'components/Fade';

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
         <Fade>
            <UserDetail />
         </Fade>
      ),
   },
   {
      path: '/couter',
      main: () => (
         <Fade>
            <HomePage />
         </Fade>
      ),
   },
   {
      path: '/detail',
      main: () => (
         <Fade>
            <UserDetail />
         </Fade>
      ),
   },
   {
      path: '/login',
      exact: true,
      main: () => (
         <Fade>
            <Login />
         </Fade>
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
