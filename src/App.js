import React, { Component } from 'react';
import AppMap from './AppMap';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            info: '',
            markers: [
                {
                    "id": 1,
                    "name": "Pan De Rossa",
                    "neighborhood": "Dolina Trzech Stawów",
                    "address": "Trzech Stawów 23, Katowice, 40289",
                    "lat": 50.2435560,
                    "lng": 19.0473310
                },
                {
                    "id": 2,
                    "name": "Kyoto Sushi",
                    "neighborhood": "Centrum",
                    "address": "Uniwersytecka 13, Katowice, 40001",
                    "lat": 50.2616370,
                    "lng": 19.0247150
                },
                {
                    "id": 3,
                    "name": "Sakana Sushi Bar",
                    "neighborhood": "Centrum",
                    "address": "Mielęckiego 6, Katowice, 40013",
                    "lat": 50.2584330,
                    "lng": 19.0249860
                },
                {
                    "id": 4,
                    "name": "SUSHARNIA Sushi Bar",
                    "neighborhood": "Brynów",
                    "address": "Rolna 20a, Katowice, 40555",
                    "lat": 50.2318220,
                    "lng": 18.9864660
                },
                {
                    "id": 5,
                    "name": "Giovane",
                    "neighborhood": "Brynów",
                    "address": "Tomasza 12, Katowice, 40564",
                    "lat": 50.2319110,
                    "lng": 18.9780710
                },
                {
                    "id": 6,
                    "name": "Jeff's",
                    "neighborhood": "Dab",
                    "address": "Chorzowska 107, Katowice, 40101",
                    "lat": 50.2702980,
                    "lng": 19.0046630
                },
                {
                    "id": 7,
                    "name": "Zdrowa Krowa",
                    "neighborhood": "Centrum",
                    "address": "Mariacka 33, Katowice, 40-014",
                    "lat": 50.2571170,
                    "lng": 19.0286300
                },
                {
                    "id": 8,
                    "name": "Cztery katy i smak piaty",
                    "neighborhood": "Zadole",
                    "address": "Janekego 73, Katowice, 40615",
                    "lat": 50.2131380,
                    "lng": 18.9890250
                },
                {
                    "id": 9,
                    "name": "Little Hanoi...and more!",
                    "neighborhood": "Centrum",
                    "address": "Staromiejska 4, Katowice, 40013",
                    "lat": 50.2586170,
                    "lng": 19.0226660
                },
                {
                    "id": 10,
                    "name": "Tawerna El Popo",
                    "neighborhood": "Piotrowice",
                    "address": "Armii Krajowej 68, Katowice, 40671",
                    "lat": 50.2107110,
                    "lng": 18.9732330
                }
            ],
            prevmarker: ''
        };

        this.initMap = this.initMap.bind(this);

        this.openInfoWindow = this.openInfoWindow.bind(this);

        this.closeInfoWindow = this.closeInfoWindow.bind(this);
    }
    /* -----Set/Load Google Maps from API key----- */

    componentDidMount() {
        window.initMap = this.initMap;
        loadMapJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDMepRNVQ1sODbJFH1rnERhFjLjjqjf9j4&callback=initMap');
    }

    /* -----Init google map----- */

    initMap = () => {
        let self = this;
        let maps = document.getElementById('map');

        maps.style.height = window.innerHeight + 'px';

        let map = new window.google.maps.Map(maps,
            {
            center: {
                lat: 50.2648920,
                lng: 19.0237820
            },
            zoom: 13,
            mapTypeControl: false,
            mapTypeID: 'roadmap',
                scrollwheel: true,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#212121"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#212121"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.country",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#181818"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#1b1b1b"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#2c2c2c"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#8a8a8a"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#373737"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#3c3c3c"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway.controlled_access",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#4e4e4e"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#000000"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#3d3d3d"
                            }
                        ]
                    }
                ]
        });

        let markerInf = new window.google.maps.InfoWindow({});

        window.google.maps.event.addListener(markerInf, 'closeclick',
            function() {
            self.closeInfoWindow();
        });

        this.setState({
            map: map,
            infoWindow: markerInf
        });

        window.google.maps.event.addDomListener(window, 'resize',
            function() {
            let center = map.getCenter();

            window.google.maps.event.trigger(map, 'resize');
            self.state.map.setCenter(center);
        });

        window.google.maps.event.addListener(map, 'click',
            function() {
            self.closeInfoWindow();
        });

        /* -----Setting markers----- */

        let markers = [];

        this.state.markers.forEach(
            function(marker) {
            let name = marker.name;
            let image = 'https://visualpharm.com/assets/501/Meal-595b40b75ba036ed117d8613.svg';
            let mapMarker = new window.google.maps.Marker({
                position: new window.google.maps.LatLng(marker.lat, marker.lng),
                animation: window.google.maps.Animation.DROP,
                map: map,
                icon: image,
            });

            mapMarker.addListener('click',
                function() {
                self.openInfoWindow(mapMarker);
            });

            marker.longname = name;
            marker.marker = mapMarker;
            marker.display = true;
            markers.push(marker);
        });

        this.setState({
            markers: markers
        });
    };
    /* -----Open information window----- */

    openInfoWindow = (marker) => {
        this.closeInfoWindow();
        this.state.infoWindow.open(this.state.map, marker);
        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        this.setState({
            prevmarker: marker
        });

        this.state.infoWindow.setContent('Loading. Please wait.');

        this.state.map.setCenter(marker.getPosition());
        this.state.map.panBy(0, -200);
        this.getMarkerInfo(marker);
    };

    /* -----Informations from the FOURSQUARE API----- */

    getMarkerInfo = (marker) => {
        let clientId = 'UZ1ZLBD4KALIJPXUVNS3ZZMHL0RHNVKTQCA51JT4PD5Q4EAE';
        let clientSecret = 'DRZYSW3R4VF022CYJZAG0WCBZPB0ALI1NGKH1ZKDJBP3PSOB';

        let fqURL = 'https://api.foursquare.com/v2/venues/search?client_id=' +
            clientId +
            '&client_secret=' +
            clientSecret +
            '&v=20180823&ll=' +
            marker.getPosition().lat() +
            ',' +
            marker.getPosition().lng() +
            '&limit=1';

        let self = this;

        fetch(fqURL).then(
            function(response) {
            if (response.status !== 200) {
                self.state.infoWindow.setContent('Cannot load content');
                return
            }
            /* ------Retrieving data from response----- */

            response.json()
                .then(function(data) {
                console.log(data);
                let locationData = data.response.venues[0];
                let name = `<h2>${locationData.name}</h2>`;
                let placeAddr = `<p>${locationData.location.formattedAddress[0]}</p>`;

                let more = '<a href="https://foursquare.com/v/' +
                    locationData.id +
                    '" target="_blank">Click for more info</a>';
                self.state.infoWindow.setContent(name + placeAddr + more);
            });
        })
            .catch(function() {
                self.state.infoWindow.setContent('Cannot load content')
            });
    };

    /* -----Close InfoWindow----- */

    closeInfoWindow = () => {
        if(this.state.prevmarker) {
            this.state.prevmarker.setAnimation(null);
        }
        this.setState({
            prevmarker: ''
        });
        this.state.infoWindow.close();
    };

    render() {
        return (
            <div className = "App">
                <AppMap  markers = {this.state.markers}
                          openInfoWindow = {this.openInfoWindow}
                          closeInfoWindow = {this.closeInfoWindow} />
                <div id = "map" />
            </div>
        );
    }
}

export default App;

/* -----Loading google maps----- */

function loadMapJS(map) {
    let script = window.document.createElement('script');

    script.src = map;
    script.async = true;
    script.onerror = function() {
       alert('Cannot load map. Please check your connection.');
    };

    let ref = window.document.getElementsByTagName('script')[0];
    ref.parentNode.insertBefore(script, ref);
}