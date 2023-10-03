import React from 'react';
import ReactMapGL from 'react-map-gl';

function Map() {
  const viewport = {
    width: '100%',
    height: '400px',
    latitude: 51.505,
    longitude: -0.09,
    zoom: 13,
  };

  const acess_Token =
    'pk.eyJ1IjoibmFsaWFuYWNoZWkiLCJhIjoiY2xkMGF6NHFqMnc3cDN4bXNteDJka2hyZSJ9.Zul-bS17jLSbG-YrDtz2eQ';

  return <ReactMapGL {...viewport} mapboxApiAccessToken={acess_Token} />;
}

export default Map;
