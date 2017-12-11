import React, { Component } from 'react';
import Popup from './Popup';



export const Users = ({users,handler,cards}) => {
  return (
    <div className="side-menu-users" onClick={handler}>
      <img src="http://bit.ly/2A9opKd" alt=""/>
      <Popup className="side-menu-popup" show={users}>
        <img className="user-images" src={cards[0].assigneeImg} alt=""/>
        <h2>{cards[0].assignee}</h2>
        <img className="user-images" src={cards[3].assigneeImg} alt=""/>
        <h2>{cards[3].assignee}</h2>
      </Popup>
    </div>
          )
}

export const Settings = ({settings,handler}) => {
  return (
    <div className="side-menu-users" onClick={handler}>
      <img src="http://bit.ly/2ALHljH" alt=""/>
      <Popup className="side-menu-popup" show={settings}>
        <img className="user-images" src="http://bit.ly/2yfcs4f" alt=""/>
        <h1>Account Preferences</h1>
        <h3 className="account-prefs">Change Email</h3>
        <h3 className="account-prefs">Change Password</h3>
        <h3 className="account-prefs">Add Payment</h3>
      </Popup>
    </div>
          )
}

export const Analytics = ({analytics,handler}) => {
  return (
    <div className="side-menu-users" onClick={handler}>
      <img src="http://bit.ly/2kOqCbf" alt=""/>
      <Popup className="side-menu-popup" show={analytics}>
        <h1>Analytics</h1>
        <img className="analytics-images" src="http://bit.ly/2jPgDPA" alt=""/>
      </Popup>
    </div>
          )
}

export const Github = () => {
  return (
    <div className="side-menu-users">
      <a href="https://github.com/ba5eem/React-StarterPack/tree/kanban" className="link">
        <img src="http://bit.ly/2BpEJuV" alt=""/>
      </a>
    </div>
          )
}


export const Support = ({support,handler}) => {
  return (
    <div className="side-menu-users-about" onClick={handler}>
      <img src="http://bit.ly/2iOG2s1" alt=""/>
      <Popup className="side-menu-popup" show={support}>
        <h1>Support</h1>
        <img className="analytics-images" src="http://bit.ly/2yfoQkr" alt=""/>
      </Popup>

    </div>
          )
}





export default class SideMenu extends Component {
    constructor(props) {
    super(props);

    this.state={
      users:false,
      settings: false,
      analytics: false,
      support:false
    }
    this.toggleUsers=this.toggleUsers.bind(this);
    this.toggleSettings=this.toggleSettings.bind(this);
  }

  toggleUsers(users){
    this.setState({users});
  } 
  toggleSettings(settings){
    this.setState({settings});
  } 
  toggleAnalytics(analytics){
    this.setState({analytics});
  }
  toggleSupport(support){
    this.setState({support});
  }



  render() {
    return (
      <div className="side-menu">
        <Users 
          cards={this.props.cards} 
          handler={(e)=>this.toggleUsers(!this.state.users)} 
          users={this.state.users}>
        </Users>
        <Settings
          handler={(e)=>this.toggleSettings(!this.state.settings)} 
          settings={this.state.settings}>
        </Settings>
        <Analytics
          handler={(e)=>this.toggleAnalytics(!this.state.analytics)} 
          analytics={this.state.analytics}>
        </Analytics>
        <Github/>
        <Support
          handler={(e)=>this.toggleSupport(!this.state.support)} 
          support={this.state.support}>
        </Support>
      </div>
    );
  }
}
