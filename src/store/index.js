import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import apiReducer from './api-reducer.js';
import stateCodeReducer from './stateCodes.js';

let reducers = combineReducers({ apiReducer, stateCodeReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();

