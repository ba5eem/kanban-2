import React from "react";
const { compose, withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} = require("react-google-maps");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
const google = window.google;
console.log(google.DrawingManager);

const key = "AIzaSyBBTA30AK8U7dJYaDZg2KvhaA-YaQvrhvs";
const mapUrl =`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`;
const loadingElement = <div style={{ height: `100%` }} />;
const containerElement = <div style={{ height: `400px`, width: `800px` }} />;
const mapElement = <div style={{ height: `100%` }} />;
const defaultCenter = { lat: 21.296594, lng: -157.855613 };

const MapWithADrawingManager = compose(
  withProps({
    googleMapURL:mapUrl,
    loadingElement: loadingElement,
    containerElement: containerElement,
    mapElement: mapElement
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={new google.maps.LatLng(props.lat, props.lng)}
  >
    <DrawingManager
      defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
      defaultOptions={{
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.CIRCLE,
            google.maps.drawing.OverlayType.POLYGON,
            google.maps.drawing.OverlayType.POLYLINE,
            google.maps.drawing.OverlayType.RECTANGLE,
          ],
        },
        circleOptions: {
          fillColor: `#ffff00`,
          fillOpacity: 1,
          strokeWeight: 5,
          clickable: false,
          editable: true,
          zIndex: 1,
        },
      }}
    />
  </GoogleMap>
);

export default MapWithADrawingManager