import React from "react";
import GoogleMapReact from 'google-map-react';
import { MapMarker } from './index.js';
import { useOpenBrewery } from '../../store';
import Tile from '@mui/material/Card';


export function Map(){

  const {
    name,
    latitude,
    longitude
  } = useOpenBrewery((state) => state.brewery);

    const latitudeFloat =  parseFloat(latitude);
    const longitudeFloat = parseFloat(longitude);

    console.log('latitudeFloat:', latitudeFloat)

  const defaultProps = {
    center: {
      lat: latitudeFloat,
      lng: longitudeFloat
    },
    zoom: 15
  };

  return latitudeFloat && longitudeFloat ? (
    // Important! Always set the container height explicitly
    <Tile>
      <h3 className="tile-name">Map</h3>
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
    </Tile>
  ): (<></>);
}