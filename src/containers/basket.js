import React from 'react'
import { connect } from 'react-redux'
import { removeFromBasket } from '../actions'
import Basket from '../components/basket'

const mapStateToProps = (state, ownProps) => {
  return {
    basket: state.basketItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromBasket: (id) => {
      dispatch(removeFromBasket(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Basket)
