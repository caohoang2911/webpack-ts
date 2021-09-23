import { RouteApp } from 'core/router';
import { lazy } from '@loadable/component';
import { Suspense } from 'react';

const User = lazy(() => import('./UserPage'));
const UserDetail = lazy(() => import('./UserDetailPage'));
import { Loading } from './../../components/Loading/Loading';

export const routerUser: Array<RouteApp> = [
  {
    path: '/user',
    exact: true,
    main: () => (
      <Suspense fallback={<Loading />}>
        <User />
      </Suspense>
    ),
  },
  {
    path: '/user/:id',
    main: () => (
      <Suspense fallback={<Loading />}>
        <UserDetail />
      </Suspense>
    ),
  },
];
