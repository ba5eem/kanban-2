import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      ready:['first card','second card','third card'],
      progress:['first progress card'],
      done:['first done card'],
      undo:[]
    }
    this.eachCard=this.eachCard.bind(this);
  }

  addCard(text){
    let arr = this.state.ready;
    arr.push(text);
    this.setState({ready: arr})
  }

  removeCard(i){
    let arr = this.state.ready;
    arr.splice(i,1);
    this.setState({ready: arr})
  }

  updateCard(newText,i){
    let arr = this.state.ready;
    arr[i] = newText;
    this.setState({ready: arr});
  }

  eachCard(text,i){
    return(<Card 
              update={this.updateCard.bind(this)}
              remove={this.removeCard.bind(this)}
              add={this.addCard.bind(this)}
              key={i} 
              index={i}>{text}</Card>)
  }




  render(){
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
