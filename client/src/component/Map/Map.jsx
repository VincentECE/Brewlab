import React from "react";
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './index.js';
import { useOpenBrewery } from '../../store'


export function Map(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    <div className='map' style={{ height: '50vh', width: '70%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <MapMarker
          lat={10.99835602}
          lng={77.01502627}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

