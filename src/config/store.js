import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from "redux-logger";

const logger = createLogger();

let store = createStore(applyMiddleware(thunk, logger));

export default () => {
  return store 
}