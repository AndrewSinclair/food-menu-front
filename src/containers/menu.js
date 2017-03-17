import React from 'react'
import { connect } from 'react-redux'
import { addToBasket, fetchMenuData } from '../actions'
import Menu from '../components/menu'

const mapStateToProps = (state={menuLoading: {}}, ownProps) => {
  console.log("test")
  console.log(state)
  return {
    data: state.menuLoading.data,
    isLoading: state.menuLoading.isMenuLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToBasket: (item) => {
      dispatch(addToBasket(item))
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
