import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


const MyMapComponent = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 21.296594, lng: -157.855613 }}>
    <Marker position={{ lat: props.lat, lng: props.lng }} />
  </GoogleMap>
));

const enhance = _.identity;

const ReactGoogleMaps = ({lat, lng}) => [
  
  <MyMapComponent key="map" lat={lat} lng={lng} />
];

export default enhance(ReactGoogleMaps);