import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Basket from '../containers/basket'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchMenuData()
  }

  render() {
    let menus

    if (this.props.isLoading) {
      menus = <span>Loading...</span>
    } else {
      menus = this.props.data.map((item, i) => {
        return (
          <ul className="menu" key={item.id}>
            <li>
            <span>{item.name}</span>
            <span>{item.description}</span>
            <span>
            <RaisedButton label="Add" onTouchTap={this.props.addToBasket.bind(this, item.id, item.name)}/>
            </span>
            </li>
          </ul>
        )
      })
    }

    return (
      <div>
        <h1> Famous Franks </h1>
        { menus }
        <Basket />
      </div>
    )
  }
}

export default Menu
