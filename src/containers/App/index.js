import React, { Component } from 'react';
import { connect } from 'react-redux';

import Maps from '../Maps/';



class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data:''
    }
  }
/*THIS WILL INVOKED LOADTASKS AND BRING THE DATA TO THIS SMART COMPONENT*/
  componentDidMount() { 
    // this.props.loadData();
    // without DB setup this will fail - after DB - uncomment above line
  }
/*NOTHING ABOVE NEEDS TO CHANGE*/






  render(){
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="App">
          <Maps/>
        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/



const ConnectedApp = connect(
  null
)(App)

export default ConnectedApp;