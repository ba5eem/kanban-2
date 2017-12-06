import React from "react";
const { compose, withProps, withStateHandlers } = require("recompose");
const FaAnchor = require("react-icons/lib/fa/anchor");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  OverlayView,
} = require("react-google-maps");

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2),
})

const MapWithAnOverlayView = compose(
  withStateHandlers(() => ({
    count: 0,
  }), {
    onClick: ({ count }) => () => ({
      count: count + 1,
    })
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{lat:props.lat, lng: props.lng}}
  >
    <OverlayView
      position={{lat:props.lat, lng: props.lng}}
      /*
       * An alternative to specifying position is specifying bounds.
       * bounds can either be an instance of google.maps.LatLngBounds
       * or an object in the following format:
       * bounds={{
       *    ne: { lat: 62.400471, lng: -150.005608 },
       *    sw: { lat: 62.281819, lng: -150.287132 }
       * }}
       */
      /*
       * 1. Specify the pane the OverlayView will be rendered to. For
       *    mouse interactivity, use `OverlayView.OVERLAY_MOUSE_TARGET`.
       *    Defaults to `OverlayView.OVERLAY_LAYER`.
       */
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      /*
       * 2. Tweak the OverlayView's pixel position. In this case, we're
       *    centering the content.
       */
      getPixelPositionOffset={getPixelPositionOffset}
      /*
       * 3. Create OverlayView content using standard React components.
       */
    >
      <div style={overlayStyle}>
        
      </div>
    </OverlayView>
  </GoogleMap>
);
const overlayStyle = {
  background: 'transparent',
  border: "20px solid black",
  padding: 15,
  marginBottom: 20,
  width: 800,
  height: 400
}
export default MapWithAnOverlayView;
