import React from "react";
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './index.js';
import { useOpenBrewery } from '../../store';


export function Map(){

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
    <div className='map' style={{ height: '50vh', width: '70%' }}>
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
  ): (<></>);
}