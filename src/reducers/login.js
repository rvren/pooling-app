import { loginActions } from '../actions'
import Immutable from 'immutable';

const { LOGIN_REQUEST, LOGIN_RECEIVE, LOGIN_ERROR} = loginActions.names

const initialState = Immutable.fromJS({
  isRequesting:false,
  listArray : null,
  error:null,
  isComplete: false,
});

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
        return state.merge({'isRequesting':true})

    case LOGIN_RECEIVE:
      return state.merge({
            'isRequesting':false,
            'isComplete': true, 
            'listArray': action.payload
        })

    case LOGIN_ERROR:
      return state.merge({
          'isRequesting': false, 
          'error': action.payload,
          'isComplete': false
        })

    default:
      return state;
  }
}