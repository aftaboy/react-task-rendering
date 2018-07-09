import React, { Component } from 'react';
import ItemData from './ItemData'

export default class ItemList extends Component {

    render() {

        const itemData = this.props.data.map((items) => <ItemData data={items} key={items.id} />);

        return (
            <div>
                {itemData}
            </div>
        )
    }
}