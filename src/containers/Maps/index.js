import React, { Component } from 'react';
import { connect } from 'react-redux';
import FindArtButtons from './components/FindArtButtons.js';
import ReactGoogleMaps from './components/Maps';
import StreetView from './components/StreetView';
import MapWithAnOverlayView from './components/Overlay.js';
import MapWithGroundOverlay from './components/GroundOverLay';
import MapWithADrawingManager from './components/DrawingManager'

const kakaako_lat = 21.296594;
const kakaako_lng = -157.855613;


class Map extends Component {
  constructor() {
    super();
    
    this.state={ 
      lat: kakaako_lat,
      lng: kakaako_lng
    }
  }
/*THIS WILL INVOKED LOADTASKS AND BRING THE DATA TO THIS SMART COMPONENT*/
  componentDidMount() { 
    // this.props.loadData();
    // without DB setup this will fail - after DB - uncomment above line
  }
/*NOTHING ABOVE NEEDS TO CHANGE*/


  onMarkerClick(){
    console.log('i got clicked');
  }
  PichiAvo(){
    let PichiAvo_lat = 21.2968616;
    let PichiAvo_lng = -157.8607177;
    this.setState({
      lat: PichiAvo_lat, 
      lng: PichiAvo_lng
    })
  }





  render(){
      const key = "AIzaSyBBTA30AK8U7dJYaDZg2KvhaA-YaQvrhvs";
      const mapUrl =`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`;
      const loadingElement = <div style={{ height: `100%` }} />;
      const containerElement = <div style={{ height: `400px`, width: `800px` }} />;
      const mapElement = <div style={{ height: `100%` }} />;
      const defaultCenter = { lat: 21.296594, lng: -157.855613 };
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="App">
        <MapWithADrawingManager lat={this.state.lat}
            lng={this.state.lng}/>
        {/*  <MapWithGroundOverlay
            googleMapURL={mapUrl}
            loadingElement={loadingElement}
            containerElement={containerElement}
            mapElement={mapElement}
            lat={this.state.lat}
            lng={this.state.lng}
            />*/}
          {/*<MapWithAnOverlayView
            googleMapURL={mapUrl}
            loadingElement={loadingElement}
            containerElement={containerElement}
            mapElement={mapElement}
            lat={this.state.lat}
            lng={this.state.lng}
            />
          <ReactGoogleMaps 
            lat={this.state.lat} 
            lng={this.state.lng}
            onMarkerClick={this.onMarkerClick.bind(this)} />
          <FindArtButtons
            PichiAvo={this.PichiAvo.bind(this)} />
          <StreetView
            lat={this.state.lat}
            lng={this.state.lng} />*/}

          
        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/



const ConnectedMap = connect(
  null
)(Map)

export default ConnectedMap;