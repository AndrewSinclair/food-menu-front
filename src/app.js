import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux'
import { createStore  } from 'redux'
import menuApp from './reducers';
import Header from './header';
import Basket from './basket';
import Menu from './menu';

require('../sass/app.scss');
injectTapEventPlugin();

let store = createStore(menuApp);

class App extends Component {
    constructor() {
        super();

        this.state = {
            address: {
                city: "Winnipeg",
                street: "123 fake street"
            },
            menu: [
                {id: 1234, title: "rice", description: "white"},
                {id: 5678, title: "chicken", description: "tastes like chicken"}
            ]
        };
    }

    render() {
        return <Provider store={store}>
                <MuiThemeProvider>
                    <div>
                        <Header title="Wing's Restaurant" rating="3" address={this.state.address}/>
                        <Menu data={this.state.menu}/>
                        <Basket/>
                    </div>
               </MuiThemeProvider>
            </Provider>
    }
}

render(<App/>, document.getElementById("app"));

