import 'core/index.scss';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Header } from './layout/Header/Header';
import { RouteApp, routerApp } from './router';

export const App = (): JSX.Element => {
  const showRouter = (routerApp: Array<RouteApp>) => {
    const results = routerApp.map((route: RouteApp, index: number) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
    });
    return <Switch>{results}</Switch>;
  };

  return (
    <div>
      <Router>
        <Header />
        {showRouter(routerApp)}
      </Router>
    </div>
  );
};

export default App;
