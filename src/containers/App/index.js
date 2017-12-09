import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import {data} from './data';
import {filter,remove} from './helpers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      ready:filter(data,'status','ready'),
      progress:filter(data,'status','progress'),
      done:filter(data,'status','done'),
      undo:[]
    }
    this.eachCard=this.eachCard.bind(this);
  }

  addCard(text){
    let arr = this.state.ready;
    arr.push(text);
    this.setState({ready: arr})
  }

  removeCard(i,status){
      this.setState({[status]: remove(this.state[status],i)}) 
  }

  updateCard(newText,i,status){
    if(status === 'ready'){
      let arr = this.state.ready;
      arr[i].title = newText;
      this.setState({ready: arr})
    }
    if(status === 'progress'){
      let arr = this.state.progress;
      arr[i].title = newText;
      this.setState({progress: arr})
    }
    if(status === 'done'){
      let arr = this.state.done;
      arr[i].title = newText;
      this.setState({done: arr})
    }   
  }

  eachCard(text,i){
    return(<Card 
              update={this.updateCard.bind(this)}
              remove={this.removeCard.bind(this)}
              add={this.addCard.bind(this)}
              key={i}
              text={text} 
              index={i}></Card>)
  }




  render(){
    console.log(this.state.undo);
    return(
      <div className="board-container">
        <div className="ready-container">  
          <h1 className="ready-header">Ready</h1>    
          {this.state.ready.map(this.eachCard)}
        </div>
        <div className="progress-container">
          <h1 className="progress-header">In-Progress</h1>
          {this.state.progress.map(this.eachCard)}
        </div>
        <div className="done-container">
          <h1 className="done-header">Done</h1>
          {this.state.done.map(this.eachCard)}
        </div>
      </div>


      )
  }
}


//<button onClick={this.addCard.bind(this,'new entry')}
          //className="add-card">Add New</button>

const ConnectedApp = connect(
  null
)(App)

export default ConnectedApp;
