import React from 'react'
import { connect } from 'react-redux'
import Routes from '../components/routes'

const mapStateToProps = (state={login: {}}, ownProps) => {
  return { jwt: state.login.jwt }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes)
