import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';
import Header from './header';
import Basket from './basket';
import Menu from './menu';

class App extends Component {
    render() {
        return <div>
            <Header/>
            <Menu/>
            <Basket/>
        </div>
    }
}


render(<App/>, document.getElementById("app"));
