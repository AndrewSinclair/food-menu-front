import React from 'react'
import {connect } from 'react-redux'
import {addToBasket} from '../actions'
import Menu from '../components/menu'

const mapStateToProps = (state={basketItems: []}, ownProps) => {
    return {
        data: state.basketItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToBasket: (item) => {
            dispatch(addToBasket(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
