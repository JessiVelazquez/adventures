import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import apiReducer from './api-reducer.js';
import stateCodeReducer from './stateCodes.js';
import parkCodeReducer from './parkCodes.js';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (err) {
    console.log(err)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState)
  } catch (err) {
    console.log(err)
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

let reducers = combineReducers({ apiReducer, stateCodeReducer, parkCodeReducer });

const store = () => {
  return createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();

