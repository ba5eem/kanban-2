import React, { Component } from 'react';
import { connect } from 'react-redux';
import Comment from './comment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      queue:['first card','i like bacon', 'boom goes that']
    }

  }

  removeComment(i){
    var arr = this.state.queue;
    arr.splice(i,1);
    this.setState({queue: arr})
  }

  updateComment(newText,i){
    let arr = this.state.queue;
    arr[i] = newText;
    this.setState({queue: arr});
  }

  eachComment(text,i){
    return (
        <Comment key={i} index={i}>{text}</Comment>
      )
  }


  render(){
    return(
      <div className="board">
        {this.state.queue.map(this.eachComment)}
      </div>


      )
  }
}


const ConnectedApp = connect(
  null
)(App)

export default ConnectedApp;
