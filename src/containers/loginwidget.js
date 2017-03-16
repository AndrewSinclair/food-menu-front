import React from 'react'
import { connect } from 'react-redux'
import { fetchLogin } from '../actions'
import LoginWidget from '../components/loginwidget'

const mapStateToProps = (state={login: {jwt: null}}, ownProps) => {
  return {
    isAuthenticating: state.login.isAuthenticating,
    jwt: state.login.jwt
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLogin: (userCreds) => {
      dispatch(fetchLogin(userCreds))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginWidget)
