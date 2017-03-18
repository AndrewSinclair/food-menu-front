import React from 'react'
import { connect } from 'react-redux'
import { addToBasket, fetchMenuData } from '../actions'
import Menu from '../components/menu'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.menuLoading.data,
    isLoading: !!state.menuLoading.isMenuLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (itemId, itemName) => {
      dispatch(addToBasket(itemId, itemName))
    },
    fetchMenuData: () => {
      dispatch(fetchMenuData())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)
