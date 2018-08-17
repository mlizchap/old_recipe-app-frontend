import React, {Component} from 'react';
import './Item.css'

class Item extends Component {

    render() {
        return (
            <div className="item">{this.props.name}</div>
        );
    }
}

export default Item;

