import React, { Component } from 'react';

export default class TopMenu extends Component {
  render() {
    return (
      <div className="top-menu">
        <div className="logo-left">
          <img src="http://bit.ly/2jD7klL" alt=""/>
        </div>
        <div className="current-user"></div>
        <div className="add-block"></div>
        <div className="search-block"></div>


      </div>
    );
  }
}
