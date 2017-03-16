import { combineReducers } from 'redux'
import { ADD_TO_BASKET, LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from '../actions'

function basketItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [
        ...state,
        {
          text: action.text
        }
      ]

    default:
     return state
  }
}

function login(state = [], action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: true
      })

    case SUCCESS_LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: false,
        jwt: action.jwt
      })

    case ERROR_LOGIN:
      return Object.assign({}, state, {
        isAuthenticating: false,
        error: action.error
      })

    default:
      return state
  }
}

const menuApp = combineReducers({
  basketItems,
  login,
})

export default menuApp
