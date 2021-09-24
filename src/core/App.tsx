import { Loading } from 'components/Loading/Loading';
import { RouteApp, routerApp } from 'core/router';
import { NotFound } from 'modules/notfound';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import EmptyLayout from './layout/EmptyLayout';
import User from './../modules/user/UserPage/index';

export const App = (): JSX.Element => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/notfound" component={() => <NotFound />} />
          <Route path="/t">
            <EmptyLayout>
              <Switch>
                <Route path="/temp" component={() => <User />} />
              </Switch>
            </EmptyLayout>
          </Route>
          <Route path="/">
            <DefaultLayout>
              <Switch>
                {routerApp.map((route: RouteApp, index: number) => {
                  return (
                    <Route
                      key={index}
                      path={route.path}
                      exact={route.exact}
                      component={route.main}
                    />
                  );
                })}
              </Switch>
            </DefaultLayout>
          </Route>

          <Route path="*" exact component={() => <NotFound />} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
