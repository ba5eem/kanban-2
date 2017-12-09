import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './comment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      queue:[]
    }
  }

  addComment(text){
    let arr = this.state.queue;
    arr.push(text);
    this.setState({queue: arr})
  }

  removeComment(i){
    let arr = this.state.queue;
    arr.splice(i,1);
    this.setState({queue: arr})
  }

  updateComment(newText,i){
    let arr = this.state.queue;
    arr[i] = newText;
    this.setState({queue: arr});
  }


  render(){
    return(
      <div className="board">
        <button onClick={this.addComment.bind(this,'new entry')}className="add-card">Add New</button>
        {this.state.queue.map((text,i)=>{
          return(
            <Comment 
              update={this.updateComment.bind(this)}
              remove={this.removeComment.bind(this)}
              add={this.addComment.bind(this)}
              key={i} 
              index={i}>{text}</Comment>
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
