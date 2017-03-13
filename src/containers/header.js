import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/header'

const mapStateToProps = (state={header: {}}, ownProps) => {
  //console.log(state);
  return { jwt: state.header.jwt }
}
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
