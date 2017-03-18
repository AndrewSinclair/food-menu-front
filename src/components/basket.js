import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'


class Basket extends Component {
  render() {
    const basketItems = this.props.basket.map((item, i) => {
      return (
        <div key={item.id}>
          <span>{item.name}</span>
          <RaisedButton label="Remove" onTouchTap={this.props.removeFromBasket.bind(this, item.id) } />
        </div>
      )
    })

    return <div>{ basketItems }</div>
  }
}

export default Basket
