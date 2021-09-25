import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from 'store/storeConfig';
declare let __VERSION__: string;
import App from './App';
import 'core/index.scss';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode verion ' + __VERSION__);
}
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
