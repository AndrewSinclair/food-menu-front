import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    addDish(event, title) {
        event.stopPropogation();
        console.log(event);
        console.log(title);
    }

    render() {
        const menus = this.props.data.map((item, i) => {
             return <div key={i}>
                <span onClick={this.addDish.bind(this, item.title)}> {item.title}</span>
                <span> {item.body}</span>
             </div>
        });

        return <div>{ menus }</div>
    }
}
