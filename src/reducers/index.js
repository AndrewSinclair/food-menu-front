import { combineReducers } from 'redux'
import { ADD_TO_BASKET, REMOVE_FROM_BASKET,
         LOGIN, SUCCESS_LOGIN, ERROR_LOGIN,
         MENU_LOADING, SUCCESS_MENU_LOADING, ERROR_MENU_LOADING } from '../actions'

function basketItems(state = [], action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [
        ...state,
        action.item
      ]

    case REMOVE_FROM_BASKET:
      return state.filter(function(item) {
        return item.id !== action.id
      })

    default:
     return state
  }
}

function menuLoading(state={isMenuLoading: true, data: []}, action) {
  switch (action.type) {
    case MENU_LOADING:
      return Object.assign({}, state, {
        isMenuLoading: true
      })

    case SUCCESS_MENU_LOADING:
      return Object.assign({}, state, {
        isMenuLoading: false,
        data: action.data
      })

    case ERROR_MENU_LOADING:
      return Object.assign({}, state, {
        isMenuLoading: false,
        error: action.error
      })

    default:
      return state
  }
}

function login(state = {}, action) {
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
  menuLoading,
  login,
})

export default menuApp
