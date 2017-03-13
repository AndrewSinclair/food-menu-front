import React, {Component} from 'react'
import { Link } from 'react-router'

class HomePage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p>
          <Link to="/">
            Home
          </Link>
          <Link to="/menu">
            Menu
          </Link>
        </p>

        {this.props.children}
      </div>
    )
  }
}

export default HomePage
