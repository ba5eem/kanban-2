import React, { Component } from 'react';

export default class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">

        <div className="logo-left">
          <img src="http://bit.ly/2jD7klL" alt=""/>
        </div>
        
        <div className="add-block">
          <div className="add-card">+ Add Card</div>
        </div>

        <div className="current-user">board.io/{this.props.user}</div>

        

        <div className="search-block">
          <input className="search-input" placeholder="filter board" type="text"/>
        </div>


      </div>
    );
  }
}
