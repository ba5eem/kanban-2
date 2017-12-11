import React, { Component } from 'react';



export const Users = () => {
  return (
    <div className="side-menu-users">
      <img src="http://bit.ly/2A9opKd" alt=""/>

    </div>
          )
}

export const Settings = () => {
  return (
    <div className="side-menu-users">
      <img src="http://bit.ly/2ALHljH" alt=""/>

    </div>
          )
}

export const Analytics = () => {
  return (
    <div className="side-menu-users">
      <img src="http://bit.ly/2kOqCbf" alt=""/>

    </div>
          )
}

export const Github = () => {
  return (
    <div className="side-menu-users">
      <img src="http://bit.ly/2BpEJuV" alt=""/>

    </div>
          )
}

export const About = () => {
  return (
    <div className="side-menu-users-about">
      <img src="http://bit.ly/2iOG2s1" alt=""/>

    </div>
          )
}





export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <Users/>
        <Settings/>
        <Analytics/>
        <Github/>
        <About/>
      </div>
    );
  }
}
