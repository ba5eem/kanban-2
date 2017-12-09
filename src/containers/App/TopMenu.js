import React, { Component } from 'react';
import { connect } from 'react-redux';

class TopMenu extends Component {
  constructor(props) {
    super(props);

    this.state={
      adding: false
    }
  }

  add(){
    this.setState({adding: true})
    console.log('addme');
  }






  

  render(){
    return(
      <div className="top-menu">

        <div className="logo-left">
          <img src="http://bit.ly/2jD7klL" alt=""/>
        </div>
        
        <div className="add-block">
          <div onClick={this.add} className="add-card">+ Add Card</div>
        </div>

        <div className="current-user">board.io/{this.props.user}</div>

        

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
