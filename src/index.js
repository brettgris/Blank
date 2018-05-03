import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';

// router
import {BrowserRouter} from 'react-router-dom';

// redux
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import reducers from './app/reducers/reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);