import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './views/main';
import registerServiceWorker from './registerServiceWorker';
import  configureStore  from './config/store';
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoq4_-BeKtYRIs-3FjJL721G1eP5DaU0g&libraries=places"></script>

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();