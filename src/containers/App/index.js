import React, { Component } from 'react';
import { connect } from 'react-redux';
import FindArtButtons from './FindArtButtons.js';
import ReactGoogleMaps from '../Maps';


class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      lat: 21.296594,
      lng: -157.855613
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
    let PichiAvo_lng = -157.8607178;
    this.setState({
      lat: PichiAvo_lat, 
      lng: PichiAvo_lng
    })
  }





  render(){
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="App">
          <ReactGoogleMaps 
            lat={this.state.lat} 
            lng={this.state.lng}
            onMarkerClick={this.onMarkerClick.bind(this)} />
          <FindArtButtons
            PichiAvo={this.PichiAvo.bind(this)} />
        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/



const ConnectedApp = connect(
  null
)(App)

export default ConnectedApp;