import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './views/main';
import registerServiceWorker from './registerServiceWorker';
import  configureStore  from './config/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();