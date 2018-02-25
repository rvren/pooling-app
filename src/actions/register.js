import { createAction } from 'redux-actions'
import HackerEarthClient from '../api'

// NAMES
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_RECEIVE = 'REGISTER_RECEIVE';
export const REGISTER_ERROR = 'REGISTER_ERROR';

// CREATORS
export const  registerRequest = createAction(REGISTER_REQUEST);
export const  registerReceive = createAction(REGISTER_RECEIVE);
export const  registerError = createAction(REGISTER_ERROR);

// ACTIONS
export const getProductList = () => {
    return function(dispatch, getState) {
        dispatch( registerRequest());
        HackerEarthClient.getAllProducts()
        .then(result => {
          dispatch(registerReceive(result))
        }).catch(err => {
            dispatch( registerError(err))
        })
    }
}

// MODULE AND NAME EXPORTS
export default {
    names: {
        REGISTER_REQUEST,
        REGISTER_RECEIVE,
        REGISTER_ERROR
    },
    creators: {
         registerRequest,
         registerReceive,
         registerError
    }
}



