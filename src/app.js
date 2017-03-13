import 'babel-polyfill'
import React, {Component} from 'react'
import reactDom, {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import menuApp from './reducers'
import Header from './containers/header'

const loggerMiddleware = createLogger()

require('../sass/app.scss')
injectTapEventPlugin()


class App extends Component {
  constructor() {
    super()

    this.store = createStore(menuApp,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
  }

  render() {
    return (
      <Provider store={this.store}>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

render(<App/>, document.getElementById("app"))
