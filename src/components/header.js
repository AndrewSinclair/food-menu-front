import React, {Component} from 'react'
import { Router, Route, browserHistory } from 'react-router'
import Home from '../containers/home'
import Menu from '../containers/menu'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  requireAuth(nextState, replace) {
    //console.log(this.props.jwt)
    if (!this.props.jwt) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} >
          <Route path="/menu" component={Menu} onEnter={this.requireAuth.bind(this)} />
        </Route>
      </Router>
    )
  }
}

export default Header
