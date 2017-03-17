import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.data = []
  }

  componentWillMount() {
    this.data = this.props.fetchMenuData()
  }

  render() {
    const menus = this.data.map((item, i) => {
      (
        <div key={item.id}>
          <span>{item.title}</span>
          <span>{item.description}</span>
          <RaisedButton label="Add" onTouchTap={this.props.addToBasket}/>
        </div>
      )
    })

    return (
      <div>
        <div> Famous Franks </div>
        { menus }
      </div>
    )
  }
}

export default Menu
