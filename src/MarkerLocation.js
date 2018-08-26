import React, { Component } from 'react';

class MarkerLocation extends Component {
    render() {
        return (
            <li className = 'marker'
                role = 'button'
                tabIndex = '0'
                onClick = {this.props.openInfoWindow.bind(this,
                    this.props.data.marker)}
                onKeyPress = {this.props.openInfoWindow.bind(this,
                    this.props.data.marker)}>

                {this.props.data.longname}
            </li>
        );
    }
}

export default MarkerLocation