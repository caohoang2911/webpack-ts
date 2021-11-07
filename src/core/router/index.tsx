
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
}
