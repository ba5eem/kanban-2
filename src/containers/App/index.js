import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeCard,updateTitle,addCard,updateStatus,undoRemove,updatePriority} from '../../actions';
import Card from './Card';
import {filter} from './helpers';
import TopMenu from './TopMenu';
import SideMenu from './SideMenu';


class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      undo:[],
      archive:[],
      currentUser:'baseem',
      view: true,
      drag:[],
      ready: true,
      progress: true,
      done: true,
      mobileView: false
    }
    this.eachCard=this.eachCard.bind(this);
    this.addCard=this.addCard.bind(this);
    this.undo=this.undo.bind(this);
    this.readyView=this.readyView.bind(this);
    this.progressView=this.progressView.bind(this);
    this.doneView=this.doneView.bind(this);
  }


  addCard(){
    this.props.addCard();
  }

  removeCard(card){
    this.props.removeCard(card); 
    this.setState({undo: card}) 
  }

  updateCardTitle(newText,card){
    this.props.updateTitle(newText,card);
  }

  updateCardStatus(newStatus,card){
    this.props.updateStatus(newStatus,card);
  }

  updateCardPriority(card){
    this.props.updatePriority(card)
  }

  archive(card){
    this.props.removeCard(card);
    this.setState({archive: card })  
  }

  undo(){
    this.props.undoRemove(this.state.undo);
    this.setState({undo: []})
  }

  changeView(){
    this.setState({view: !this.state.view})
  }

  drag(e,card){
    this.setState({drag: card})
  }
  onDrop(e,card){
    this.props.updateStatus(card.status,this.state.drag); 
  }

  readyView(){
    this.setState({
      ready: true,
      progress: false,
      done: false
    })
  }

  progressView(){
    this.setState({
      ready: false,
      progress: true,
      done: false
    })
  }

  doneView(){
    this.setState({
      ready: false,
      progress: false,
      done: true
    })
  }
  componentWillMount() {
    if(window.innerWidth < 400){
      this.setState({
        mobileView: true,
        ready: true,
        progress: false,
        done: false
        })
    }
  }



  eachCard(text,i){
    return(<Card 
              updateCardTitle={this.updateCardTitle.bind(this)}
              remove={this.removeCard.bind(this)}
              updateCardStatus={this.updateCardStatus.bind(this)}
              updateCardPriority={this.updateCardPriority.bind(this)}
              archive={this.archive.bind(this)}
              drag={this.drag.bind(this)}
              onDrop={this.onDrop.bind(this)}
              view={this.state.view}
              key={i}
              text={text} 
              index={i}>
          </Card>
          )
  }




  render(){
    const undoActive = this.state.undo.length !== 0 ? true : false;
    const ready = filter(this.props.cards,'status','ready');
    const progress = filter(this.props.cards,'status','progress');
    const done = filter(this.props.cards,'status','done');
    return(
      <div className="app-container">
        <TopMenu 
          user={this.state.currentUser}
          changeView={this.changeView.bind(this)}
          addCard={this.addCard}/>
        {this.state.mobileView ?
        <div className="side-menu-users-mobile">
        <div className="mobileView-button" onClick={this.readyView}>
          <img id="mobile-ready" src="http://bit.ly/2C3sj93" alt=""/>
        </div>
        <div className="mobileView-button" onClick={this.progressView}>
          <img id="mobile-progress" src="http://bit.ly/2C51fGe" alt=""/>
        </div>
        <div className="mobileView-button" onClick={this.doneView}>
          <img id="mobile-done" src="http://bit.ly/2jO56QL" alt=""/>
        </div>
        </div> :

        <SideMenu
          cards={this.props.cards} /> }

        <div className="board-container" >
          {this.state.ready ?
          <div className="ready-container"> 
            {undoActive ? 
            <button onClick={this.undo} className="button-undo">UNDO</button> 
            : null }
            <h1 className="ready-header">Ready</h1>    
            {ready.map(this.eachCard)}
          </div> :null }
          <div className="status-divider"></div>
          {this.state.progress ?
          <div className="progress-container">
            <h1 className="progress-header">In-Progress</h1>
            {progress.map(this.eachCard)}
          </div> : null }

          <div className="status-divider"></div>
          {this.state.done ?
          <div className="done-container">
            <h1 className="done-header">Done</h1>
            {done.map(this.eachCard)}
          </div>: null }

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
    addCard: addCard,
    updateStatus: updateStatus,
    undoRemove: undoRemove,
    updatePriority: updatePriority


  },dispatch)
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
