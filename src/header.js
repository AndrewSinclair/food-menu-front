import React, {Component} from 'react';
import reactDom, {render} from 'react-dom';

export default class Header extends Component {
    render() {
        return <div>
          {this.props.title}
          {this.props.rating}
          <div>{this.props.address.street}</div>
          <div>{this.props.address.city}</div>
        </div>
    }
}
