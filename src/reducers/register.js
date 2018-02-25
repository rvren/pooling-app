import { registerActions } from '../actions'
import Immutable from 'immutable';

const { REGISTER_REQUEST, REGISTER_RECEIVE, REGISTER_ERROR} = registerActions.names

const initialState = Immutable.fromJS({
  isRequesting:false,
  listArray : null,
  error:null,
  isComplete: false,
});

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case REGISTER_REQUEST:
        return state.merge({'isRequesting':true})

    case REGISTER_RECEIVE:
      return state.merge({
            'isRequesting':false,
            'isComplete': true, 
            'listArray': action.payload
        })

    case REGISTER_ERROR:
      return state.merge({
          'isRequesting': false, 
          'error': action.payload,
          'isComplete': false
        })

    default:
      return state;
  }
}