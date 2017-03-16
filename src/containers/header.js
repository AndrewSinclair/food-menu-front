import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'

const mapStateToProps = (state={login: {}}, ownProps) => {
  return { jwt: state.login.jwt }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
