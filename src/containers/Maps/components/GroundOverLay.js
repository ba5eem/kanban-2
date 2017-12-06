import React from 'react';
const { compose } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  GroundOverlay,
} = require("react-google-maps");
const google = window.google;
console.log(google);

const MapWithGroundOverlay = compose(
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat: props.lat, lng:props.lng}}
  >
    <GroundOverlay
      defaultUrl="https://blogs-images.forbes.com/danidiplacido/files/2017/09/batman-312342_960_720.jpg?width=960"
      defaultBounds={new google.maps.LatLngBounds(
        new google.maps.LatLng(21.347083768609853,  -157.8415366821289),
        new google.maps.LatLng(21.347083768609853, -157.91226751708984)
      )}
      defaultOpacity={.5}
    />
  </GoogleMap>
);

export default MapWithGroundOverlay;

