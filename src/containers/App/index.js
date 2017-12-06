import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadData,addData,editData,deleteData } from '../../actions';
import AppHeader from '../../components/AppHeader.js';
import edit from '../../lib/Edit';
import destroyData from '../../lib/Delete';
import addNew from '../../lib/Add';
import ReactGoogleMaps from '../Maps';

class App extends Component {
  constructor() {
    super();
    
    this.state={ 
      data: []
    }
  }
/*THIS WILL INVOKED LOADTASKS AND BRING THE DATA TO THIS SMART COMPONENT*/
  componentDidMount() { 
    // this.props.loadData();
    // without DB setup this will fail - after DB - uncomment above line
  }
/*NOTHING ABOVE NEEDS TO CHANGE*/

  add(id,e){
    let data = addNew(id,e);
    console.log(data);
    this.props.addNew(data);
  }

  update(id,e){
    let data = edit(id,e);
    this.props.editTask(data);
  }

  destroy(id,e){
    let data = destroyData(id,e);
    this.props.deleteData(data);
  }






  render(){
    return (
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
        <div className="App">
          <AppHeader
            data = {this.props.data}/>
          <ReactGoogleMaps />
        </div>
      /*EVERYTHING SHOULD GO BETWEEN THESE DIVS*/
    );/*END OF RETURN*/
  }
} /*END OF RENDER AND CLASS APP*/

const mapStateToProps = (state) => {
  return {
    data: state.dataList
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  {loadData,
  addData,
  editData,
  deleteData}
)(App)

export default ConnectedApp;