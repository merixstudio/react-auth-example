import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const { __REDUX_DEVTOOLS_EXTENSION__ } = window;

export function getStore() {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      __REDUX_DEVTOOLS_EXTENSION__ && __REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
