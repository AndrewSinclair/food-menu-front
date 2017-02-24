import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';
import Header from './header';
import Basket from './basket';
import Menu from './menu';

require('../sass/app.scss');

class App extends Component {
    constructor() {
        super();

        this.state = {address: {
            city: "Winnipeg",
            street: "123 fake street"
        },
        menu: [{title: "rice", description: "white"},
               {title: "chicken", description: "tastes like chicken"}]}

    }

    render() {
        let currentTime = '10:00pm';

        return <div className="header">
            <Header title="Wing's Restaurant" rating="3" address={this.state.address}/>
            <Menu data={this.state.menu}/>
            <Basket/>
        </div>
    }
}


render(<App/>, document.getElementById("app"));
