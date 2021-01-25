import React, { Component } from 'react'

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        this.mapRefs = React.createRef()
    }
    componentDidMount() {
        const google = window.google;
        new google.maps.Map(this.mapRefs.current, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render() {
        return (
            <div ref={this.mapRefs}></div>
        )
    }
}