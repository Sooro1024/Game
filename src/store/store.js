import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './Reducers/index';
import Thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(Thunk))
);

export default store;
