import React, {Component} from 'react';

class Basket extends Component {
    render() {
        const basketItems = this.props.basket.map((item, i) => {
             return <div key={item.id}>
                <span>{item.title}</span>
                <span>{item.description}</span>
             </div>
        });

        return <div>{ basketItems }</div>
    }
}

export default Basket