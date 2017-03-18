import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

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
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.description}</span>
            <RaisedButton label="Add" onTouchTap={this.props.addToBasket}/>
          </div>
        )
      })
    }

    return (
      <div>
        <div> Famous Franks </div>
        { menus }
      </div>
    )
  }
}

export default Menu
