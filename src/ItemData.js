import React, { Component } from 'react';

export default class ItemData extends Component {

    

    render() {
        var estateImageId;
        const estateImageIdCheck = this.props.data.images[0];

        if (estateImageIdCheck !== undefined) {
            estateImageId = this.props.data.images[0].id;
        } else {
            estateImageId = 0;
        }


        // const estateImageId = this.props.data.images[0].id;
        const estateImage = 'https://images.jqestate.ru/'+estateImageId+'-jqestate-1024';

        return (
            <div className="blockCard">
                <img className="blockElem image" src={estateImage} alt="No object" />
                <p className="blockElem id">ID { this.props.data.id }</p>
                <p className="blockElem price">{ this.props.data.location.regionName }</p>
            </div>
        )
    }
}
