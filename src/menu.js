import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';
import {getJSON} from './util';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {menu: []};
    }

    componentDidMount() {
        this.Menu();
    }

    Menu() {
        getJSON('/menus', (json) => {
            this.setState({menu: json});
        });
    }

    render() {
        const menus = this.state.menu.map((item, i) => {
             return <div key={item.id}>
                <span> {item.title}</span>
                <span> {item.body}</span>
             </div>
        });

        return <div>{ menus }</div>
    }
}
