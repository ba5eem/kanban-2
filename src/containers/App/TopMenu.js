import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state={
      add: true,
      toggle: true
    }
    this.add=this.add.bind(this);
    this.view=this.view.bind(this);
  }

  add(){
    this.props.addCard();
  }

  view(e){
    this.setState({toggle: !this.state.toggle})
    this.props.changeView();
  }






  

  render(){
    const {toggle} = this.state;
    return(
      <div className="top-menu">

        <div className="logo-left">
          <img src="http://bit.ly/2jD7klL" alt=""/>
        </div>
        
        <div className="add-block">
          <div onClick={this.add} className="add-card">+ Add Card</div>
        </div>
          
        <div className="current-user">board.io/{toggle ? this.props.user : 'michelle'}</div>
        <div className="toggle-block">
            <p className="toggle-admin" onClick={(e)=>this.view(e)}>admin</p>
          <label className="switch">
            <input onChange={(e)=>this.view(e)} value={this.state.toggle} type="checkbox"/>
            <span className="slider round"></span>
          </label>
          <p className="toggle-user" onClick={(e)=>this.view(e)}>user</p>
        </div>
        

        <div className="search-block">
          <input className="search-input" placeholder="filter board" type="text"/>
        </div>


      </div>

      )

  }
}


const ConnectedTopMenu = connect(
  null
)(TopMenu)

export default ConnectedTopMenu;
