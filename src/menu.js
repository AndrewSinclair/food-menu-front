import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';
import RaisedButton from 'material-ui/RaisedButton';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    }

    addDish(title, event) {
        event.preventDefault();
        event.stopPropagation();
        console.log(event);
        console.log(title);
    }

    render() {
        const menus = this.props.data.map((item, i) => {
             return <div key={item.id}>
                <span>{item.title}</span>
                <span>{item.description}</span>
                <RaisedButton label="Add" onTouchTap={this.addDish.bind(this, item.title)}/>
             </div>
        });

        return <div>{ menus }</div>
    }
}
