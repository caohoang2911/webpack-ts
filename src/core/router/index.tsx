import AuthLayout from 'core/layout/AuthLayout';
import DefaultLayout from 'core/layout/DefaultLayout';
import EmptyLayout from 'core/layout/EmptyLayout';

import { NotFound } from 'modules/notfound';
import User from 'modules/user/UserPage';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteApp, routerApp } from './router';
import Login from 'modules/login';
import { Loading } from 'components/root/Loading/Loading';
import BaseBreadCrumbs from 'components/commons/BaseBreadCrumbs';

export default function RouterApp() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/notfound" component={() => <NotFound />} />
          <Route path="/t/:path?">
            <EmptyLayout>
              <Switch>
                <Route path="/t/temp" component={() => <User />} />
              </Switch>
            </EmptyLayout>
          </Route>
          <Route path="/login">
            <AuthLayout>
              <Switch>
                <Route path="/" component={() => <Login />} />
              </Switch>
            </AuthLayout>
          </Route>
          <Route path="/register">
            <AuthLayout>
              <Switch>
                <Route path="/" component={() => <h3>Register</h3>} />
              </Switch>
            </AuthLayout>
          </Route>
          <Route path="/">
            <DefaultLayout>
              <Switch>
                {routerApp.map(({ path, exact, Component }: RouteApp, index: number) => {
                  return (
                    <Route
                      key={index}
                      path={path}
                      exact={exact}
                      render={(props: any) => {
                        const crumbs = routerApp
                          .filter(({ path }) => props.match.path.includes(path))
                          .map(({ path, ...rest }) => ({
                            path: Object.keys(props.match.params).length
                              ? Object.keys(props.match.params).reduce(
                                  (path, param) =>
                                    path.replace(`:${param}`, props.match.params[param]),
                                  path
                                )
                              : path,
                            ...rest,
                          }));
                        return (
                          <div className="p-1">
                            <BaseBreadCrumbs crumbs={crumbs} />
                            <Component {...props} />
                          </div>
                        );
                      }}
                    />
                  );
                })}
                <Route path="*" exact component={() => <NotFound />} />
              </Switch>
            </DefaultLayout>
          </Route>
          <Route path="*" exact component={() => <NotFound />} />
        </Switch>
      </Suspense>
    </Router>
  );
}
