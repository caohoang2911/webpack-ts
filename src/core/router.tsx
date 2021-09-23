import { lazy } from '@loadable/component';
import pMinDelay from 'p-min-delay';
import { Suspense } from 'react';
const About = lazy(() => pMinDelay(import('modules/about'), 1000));
const Counter = lazy(() => pMinDelay(import('modules/home'), 1000));

export interface RouteApp {
  path: string;
  exact: boolean;
  main: () => JSX.Element;
}

export const routerApp: Array<RouteApp> = [
  {
    path: '/',
    exact: true,
    main: () => (
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <Counter />
      </Suspense>
    ),
  },
  {
    path: '/about',
    exact: true,
    main: () => (
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <About />
      </Suspense>
    ),
  },
];
