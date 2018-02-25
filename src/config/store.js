import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";

import rootReducer from '../reducers';

const combineReducer = combineReducers({
  rootReducer
})
const logger = createLogger();

let store = createStore(combineReducer, applyMiddleware(thunk, logger) );

export default () => {
  return store 
}