import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';
import Header from './header';
import Basket from './basket';
import Menu from './menu';

require('../sass/app.scss');

class App extends Component {
    render() {
        return <div className="header">
            <Header/>
            <Menu/>
            <Basket/>
        </div>
    }
}


render(<App/>, document.getElementById("app"));
