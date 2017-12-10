import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeCard,updateTitle,addCard} from '../../actions';
import Card from './Card';
import {filter,archive,status,remove} from './helpers';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      ready:[],
      progress:[],
      done:[],
      undo:[],
      archive:[],
      currentUser:'baseem'
    }
    this.eachCard=this.eachCard.bind(this);
    this.addCard=this.addCard.bind(this);
    this.undo=this.undo.bind(this);
  }


  addCard(){
    this.props.addCard();
  }

  removeCard(card){
    this.props.removeCard(card);  
  }

  updateCardTitle(newText,card){
    this.props.updateTitle(newText,card);
  }

  changeStatus(newStatus,prevStatus,i){
    this.setState({
      [newStatus]: status(this.state[newStatus],this.state[prevStatus],i,newStatus)
    })
  }

  archive(i,status){
    this.setState({
      archive: archive(this.state[status],i)
    })
    this.setState({
      [status]: remove(this.state[status],i)
    })   
  }

  undo(){
    let elem = this.state.undo;
    let status = elem.status;
    let origin = this.state[status]
    origin.push(elem);
    this.setState({
      [status]: origin,
      undo: []
    }) 
  }



  eachCard(text,i){
    return(<Card 
              updateCardTitle={this.updateCardTitle.bind(this)}
              remove={this.removeCard.bind(this)}
              changeStatus={this.changeStatus.bind(this)}
              archive={this.archive.bind(this)}
              key={i}
              text={text} 
              index={i}></Card>)
  }




  render(){
    const undoActive = this.state.undo.length !== 0 ? true : false;
    console.log(this.props.cards);
    const ready = filter(this.props.cards,'status','ready');
    const progress = filter(this.props.cards,'status','progress');
    const done = filter(this.props.cards,'status','done');
    return(
      <div className="app-container">

        <TopMenu 
          user={this.state.currentUser}
          addCard={this.addCard}/>

        <SideMenu />

        <div className="board-container">

          <div className="ready-container"> 
            {undoActive ? 
            <button onClick={this.undo} className="button-undo">UNDO</button> 
            : null }
            <h1 className="ready-header">Ready</h1>    
            {ready.map(this.eachCard)}
          </div>

          <div className="status-divider"></div>

          <div className="progress-container">
            <h1 className="progress-header">In-Progress</h1>
            {progress.map(this.eachCard)}
          </div>

          <div className="status-divider"></div>

          <div className="done-container">
            <h1 className="done-header">Done</h1>
            {done.map(this.eachCard)}
          </div>

        </div>
      </div>


      )
  }
}

function mapStateToProps(state){
  return{
    cards: state.cards
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    removeCard: removeCard,
    updateTitle: updateTitle,
    addCard: addCard


  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
