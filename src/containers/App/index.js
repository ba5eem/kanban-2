\import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import About from './About';




class App extends Component {
  constructor() {
    super();

    this.state={
      className:''
    }
  }

  handleScroll(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 66){
        this.setState({
          className: 'show'
        })
    }
  }

  componentDidMount(){
    window.onscroll = () => this.handleScroll()
  }







  render(){
    return(
      <div>
        <Header />
        <About className={this.state.className} />
      </div>


      )
  }
}


const ConnectedApp = connect(
  null
)(App)

export default ConnectedApp;
