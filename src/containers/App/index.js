import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      queue:['first card','second card','third card'],
      progress:[],
      completed:[],
      undo:[]
    }
  }

  addCard(text){
    let arr = this.state.queue;
    arr.push(text);
    this.setState({queue: arr})
  }

  removeCard(i){
    let arr = this.state.queue;
    arr.splice(i,1);
    this.setState({queue: arr})
  }

  updateCard(newText,i){
    let arr = this.state.queue;
    arr[i] = newText;
    this.setState({queue: arr});
  }


  render(){
    return(
      <div className="board">
        <button onClick={this.addCard.bind(this,'new entry')}className="add-card">Add New</button>
        {this.state.queue.map((text,i)=>{
          return(
            <Card 
              update={this.updateCard.bind(this)}
              remove={this.removeCard.bind(this)}
              add={this.addCard.bind(this)}
              key={i} 
              index={i}>{text}</Card>
            )
        })}
      </div>


      )
  }
}


const ConnectedApp = connect(
  null
)(App)

export default ConnectedApp;
