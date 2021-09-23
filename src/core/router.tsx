import { lazy } from '@loadable/component';
import { routerUser } from 'modules/user/routerUser';
const HomePage = lazy(() => import('modules/home'));

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
  ...routerUser,
];
