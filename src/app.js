import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';
import request from 'then-request';

class App extends Component {
    render() {
        return <div>
            <Header/>
            <Menu/>
            <Basket/>
            <div>is not html!</div>
        </div>
    }
}

class Header extends Component {
    render() {
        return <div>this is the header</div>
    }
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {menu: []};
    }
    componentDidMount() {
        this.Menu();
    }

    Menu() {
         return request('GET', 'http://localhost:3000/menus')
           .done((data) => {
             //this.setState({ menu: JSON.parse(data.getBody())});
            this.setState({menu: [{title: "hello", body: data.getBody()}]});
           });
    }
    render() {
        const menus = this.state.menu.map((item, i) => {
             return <div>
                <span> {item.title}</span>
                <span> {item.body}</span>
             </div>
        });
        return <div>{ menus }</div>
    }
}

class Basket extends Component {
    render() {
        return <div>this is the basket</div>
    }
}

render(<App/>, document.getElementById("app"));
