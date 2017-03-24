import React, {Component} from 'react'
import { Link } from 'react-router'
import LoginWidget from '../containers/loginwidget'
import Footer from '../components/footer'

class Layout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="menu">
        <ul className="nav">
            <li>
          <Link to="/">
            Home
          </Link>
            </li>
            <li>
          <Link to="/orders">
            Orders
          </Link>
            </li>
            <li className="login">
                <LoginWidget />
            </li>
        </ul>

        {this.props.children}

        <Footer />
      </div>
    )
  }
}

export default Layout
