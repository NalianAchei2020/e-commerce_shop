import React from 'react';
import Map from 'react-map-gl';

function Maps() {
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
