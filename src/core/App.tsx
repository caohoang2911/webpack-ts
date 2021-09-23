import { NotFound } from 'modules/notfound';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';

export const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/404" render={() => <NotFound />} />

        <Route path="/" render={() => <DefaultLayout />} />
      </Switch>
    </Router>
  );
};

export default App;
