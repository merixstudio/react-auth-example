import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import registerServiceWorker from './registerServiceWorker';
import App from './routes/App';
import rootReducer from './reducers';

import './index.css';

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

const store = createStore(
  rootReducer,
  __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
