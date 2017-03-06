import React, {Component} from 'react'
import reactDom, {render} from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Provider } from 'react-redux'
import { createStore  } from 'redux'
import menuApp from './reducers'
import Header from './components/header'
import Basket from './containers/basket'
import Menu from './containers/menu'

require('../sass/app.scss')
injectTapEventPlugin()

let store = createStore(menuApp)

class App extends Component {
    constructor() {
        super()
    }

    render() {
        return <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <Header />
                        <Menu />
                        <Basket/>
                    </div>
               </MuiThemeProvider>
            </Provider>
    }
}

render(<App/>, document.getElementById("app"))

