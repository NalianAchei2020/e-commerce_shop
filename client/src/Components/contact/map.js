import React from 'react';
import ReactMapGL from 'react-map-gl';
import Map from 'react-map-gl';

function Maps() {
  const viewport = {
    width: '100%',
    height: '400px',
    latitude: 51.505,
    longitude: -0.09,
    zoom: 13,
  };

  const acess_Token =
    'pk.eyJ1IjoibmFsaWFuYWNoZWkiLCJhIjoiY2xkMGF6NHFqMnc3cDN4bXNteDJka2hyZSJ9.Zul-bS17jLSbG-YrDtz2eQ';

  return (
    <Map
      mapboxAccessToken={acess_Token}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 13,
      }}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default Maps;
