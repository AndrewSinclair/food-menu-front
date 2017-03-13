export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const LOGIN = 'LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'


export function addToBasket(item) {
    return {type: ADD_TO_BASKET, item }
}

export function beginLogin() {
  return { type: LOGIN }
}

export function errorLogin(errorMsg) {
  return { type: ERROR_LOGIN, error: 'Login Failed! ' + errorMsg }
}

export function successLogin(jwt) {
  return { type: SUCCESS_LOGIN, jwt }
}
