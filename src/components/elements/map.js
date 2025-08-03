import React from "react"
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
// import {useHasMounted} from "../../utils/use-has-mounted"
import PropTypes from "prop-types";
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

// delete L.Icon.Default.prototype._getIconUrl;
//
// L.Icon.Default.mergeOptions({
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
//     iconUrl: require('leaflet/dist/images/marker-icon.png').default,
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png').default
// });


const Map = ({geo_lon = 11.081284, geo_lat = 52.370216}) => {
    const mapIcon = new L.Icon({
        iconUrl: require('leaflet/dist/images/marker-icon.png').default,
    });
    return (<div>
                <MapContainer
                    center={[geo_lat, geo_lon]}
                    zoom={16}
                    style={{height: "400px"}}
                    scrollWheelZoom={false}
                    dragging={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[geo_lat, geo_lon]} icon={mapIcon}>
                        <Popup>
                            Location associated
                        </Popup>
                    </Marker>
                </MapContainer>
        </div>
    )
}

Map.propTypes = {
    geo_lat: PropTypes.number,
    geo_lon: PropTypes.number,
}

export default Map