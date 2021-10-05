import { Loading } from 'components/Loading/Loading';
import DefaultLayout from 'core/layout/DefaultLayout';
import EmptyLayout from 'core/layout/EmptyLayout';
import { AnimatePresence } from 'framer-motion';
import { NotFound } from 'modules/notfound';
import User from 'modules/user/UserPage';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RouteApp, routerApp } from './router';

export default function RouterApp() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AnimatePresence>
          <Switch>
            <Route path="/notfound" component={() => <NotFound />} />
            <Route path="/t/:path?">
              <EmptyLayout>
                <Switch>
                  <Route path="/t/temp" component={() => <User />} />
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
        </AnimatePresence>
      </Suspense>
    </Router>
  );
}
