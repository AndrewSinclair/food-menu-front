import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'


class Basket extends Component {
  render() {
    const basketItems = this.props.basket.map((item, i) => {
      return (
        <li key={item.id}>
          <span>{item.name}</span>
          <RaisedButton label="Remove" onTouchTap={this.props.removeFromBasket.bind(this, item.id) } />
        </li>
      )
    })

    return <ul className="basket">{ basketItems }</ul>
  }
}

export default Basket
