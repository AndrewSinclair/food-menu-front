export const ADD_TO_BASKET = 'ADD_TO_BASKET'
export const MENU_LOADING = 'MENU_LOADING'
export const SUCCESS_MENU_LOADING = 'SUCCESS_MENU_LOADING'
export const ERROR_MENU_LOADING = 'ERROR_MENU_LOADING'
export const LOGIN = 'LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const ERROR_LOGIN = 'ERROR_LOGIN'

export function addToBasket(id, name) {
  return {type: ADD_TO_BASKET, item: {id, name} }
}

export function beginMenuLoading() {
  return { type: MENU_LOADING }
}

export function errorMenuLoading(errorMsg) {
  return { type: ERROR_MENU_LOADING, error: 'Menu Loading Failed! ' + errorMsg }
}

export function successMenuLoading(data) {
  return { type: SUCCESS_MENU_LOADING, data }
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

export function fetchLogin(userCreds) {
  return function(dispatch) {
    dispatch(beginLogin())

    const headers = new Headers({ 'Content-Type': 'application/json' })

    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers,
      body: JSON.stringify(userCreds)
    })
    .then(response =>  {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    })
    .then(response => response.json())
    .then(json => dispatch(successLogin(json)))
    .catch(error => dispatch(errorLogin(error)))
  }
}

export function fetchMenuData() {
  return function(dispatch) {
    dispatch(beginMenuLoading())

    const headers = new Headers({ 'Content-Type': 'application/json' })

    return fetch("http://localhost:3000/menus", {
      method: "GET",
      headers
    })
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    })
    .then(response => response.json())
    .then(json => dispatch(successMenuLoading(json)))
    .catch(error => dispatch(errorMenuLoading(error)))
  }
}