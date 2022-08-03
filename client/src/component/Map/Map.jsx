import GoogleMapReact from 'google-map-react';
import { MapMarker } from './index.js';
import { useOpenBrewery } from '../../store';


export const Map = () => {

  const {
    name,
    latitude,
    longitude
  } = useOpenBrewery((state) => state.brewery);

    const latitudeFloat =  parseFloat(latitude);
    const longitudeFloat = parseFloat(longitude);

  const defaultProps = {
    center: {
      lat: latitudeFloat,
      lng: longitudeFloat
    },
    zoom: 15
  };

  return latitudeFloat && longitudeFloat ? (
    // Important! Always set the container height explicitly
    <div className="card container-padding-1">
        <div className="header">
          <h1 className="header-1">Map</h1>
        </div>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <MapMarker
              lat={latitudeFloat}
              lng={longitudeFloat}
              text={name}
            />
          </GoogleMapReact>
        </div>
    </div>
  ): (<></>);
}