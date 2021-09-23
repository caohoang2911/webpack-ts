import { RouteApp, routerApp } from 'core/router';
import { Suspense } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { Loading } from './../Loading/Loading';

const AppConent = () => {
  const showRouter = (routerApp: Array<RouteApp>) => {
    const results = routerApp.map((route: RouteApp, index: number) => {
      return <Route key={index} path={route.path} exact={route.exact} component={route.main} />;
    });
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          {results} <Route exact path="*" render={() => <Redirect to="/404" />} />
        </Switch>
      </Suspense>
    );
  };

  return <>{showRouter(routerApp)}</>;
};
export default AppConent;
