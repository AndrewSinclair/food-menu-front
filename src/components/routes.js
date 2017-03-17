import React, {Component} from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Layout from '../containers/layout'
import Home from '../containers/home'
import Menu from '../containers/menu'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  requireAuth(nextState, replace) {
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
        <Route path="/" component={Layout}>
          <IndexRoute component={Home} />
          <Route path="/orders" component={Menu} onEnter={this.requireAuth.bind(this)} />
        </Route>
      </Router>
    )
  }
}

export default Header
