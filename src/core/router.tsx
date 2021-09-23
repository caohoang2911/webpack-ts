import About from 'modules/about';
import Counter from 'modules/home';

export interface RouteApp {
  path: string;
  exact: boolean;
  main: () => JSX.Element;
}

export const routerApp: Array<RouteApp> = [
  {
    path: '/',
    exact: true,
    main: () => <Counter />,
  },
  {
    path: '/about',
    exact: true,
    main: () => <About />,
  },
];
