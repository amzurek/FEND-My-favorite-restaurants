import React, {Component} from 'react'
import MarkerLocation from './MarkerLocation'

class LocList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            locations: '',
            proposition: true
        };
        this.filterLoc = this.filterLoc.bind(this);
    }

    /* -------Filter Locations------- */

    filterLoc = (e) => {
        this.props.closeInfoWindow();

        let { value } = e.target;
        let locations = [];

        this.props.markers.forEach(
            function(location) {
            if (location.longname
                    .toLowerCase()
                    .indexOf(value.toLowerCase()) >= 0) {
                location.marker.setVisible(true);
                locations.push(location);
            } else {
                location.marker.setVisible(false);
            }
        });

        this.setState({
            locations: locations,
            query: value
        });
    };

    componentWillMount() {
        this.setState({
            locations: this.props.markers
        });
    }

    /* -----Render locationList----- */

    render() {
        let loclist = this.state.locations.map(
            function(listLoc, index) {
            return (
                <MarkerLocation
                    key = { index }
                    openInfoWindow = { this.props.openInfoWindow.bind(this) }
                    data = { listLoc }
                />
            );
        },
            this);

        return (
            <div className = "search">
                <input
                    aria-labelledby = "restaurant filter"
                    className = "search-input"
                    id = "search-field"
                    placeholder = "Restaurant filter"
                    role = "search"
                    type = "text"
                    value = { this.state.query }
                    onChange = { this.filterLoc }
                />
                <ul className = "location-list">
                    { this.state.proposition && loclist }
                </ul>
            </div>
        );
    }
}

export default LocList;
