import React from 'react'
import { connect } from 'react-redux'
import Basket from '../components/basket'

const mapStateToProps = (state, ownProps) => {
  return {
    basket: state.basketItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)
