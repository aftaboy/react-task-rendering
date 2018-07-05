import React, { Component } from 'react';

export default class ItemData extends Component {

    render() {
        return (
            <div className="blockCard">
                <p className="blockElem image"> https://images.jqestate.ru/{ this.props.data.images[0].id }-jqestate-1024 </p>
                <p className="blockElem id">ID { this.props.data.id }</p>
                <p className="blockElem price">{ this.props.data.location.regionName }</p>
            </div>
        )
    }
}