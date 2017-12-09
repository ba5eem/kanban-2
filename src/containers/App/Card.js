import React, { Component } from 'react';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state={
      editing: false
    }
    this.edit=this.edit.bind(this);
    this.save=this.save.bind(this);
    this.remove=this.remove.bind(this);
  }

  edit(){
    this.setState({editing: !this.state.editing})
  }
  remove(){
    this.props.remove(this.props.index);
  }

  save(){
    var val = this.refs.newText.value;
    this.props.update(val,this.props.index)
    this.setState({editing: !this.state.editing})
  }

  renderNormal(){
    const user = "http://bit.ly/2BXP4Lo";//TODO - change to user src via parent
    return(
        <div className="card-container">
          <div className="card-text">{this.props.children}</div>
          <div className="card-details">
            <button className="expedite">EXPEDITE</button>
            <button className="github"><img src="http://bit.ly/2BpEJuV" alt=""/></button>
            <button className="github"><img src="http://bit.ly/2kdDrIk" alt=""/></button>
            <button className="github"><img src={user} alt=""/></button>
            
          </div>
          <div className="card-buttons">
            <button onClick={this.edit}className="button-edit">Edit</button>
            <button onClick={this.remove}className="button-remove">Remove</button>
            <button className="button-progress">In-Progress</button>
            <button className="button-done">Done</button>
          </div>
        </div>
      )
  }
  renderForm(){
    return(
        <div className="card-container">
          <textarea ref="newText" defaultValue={this.props.children}></textarea>
          <button onClick={this.save} className="button-save">Save</button>
        </div>
      )
  }

  render(){
      if(this.state.editing){
        return this.renderForm();
      }else{
        return this.renderNormal();
      }
  }
}


const ConnectedCard = connect(
  null
)(Card)

export default ConnectedCard;
