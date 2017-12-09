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
    let val = this.refs.remove.value;
    this.props.remove(this.props.index,val);
  }

  save(){
    let val = this.refs.newText.value;
    let stat = this.refs.newText.id;
    console.log(stat);
    this.props.update(val,this.props.index,stat)
    this.setState({editing: !this.state.editing})
  }

  renderNormal(){
    const info = this.props.text;
    return(
        <div className="card-container">
          <div className="card-text">{info.title}</div>
          <div className="card-details">
            <button className="expedite">priority: {info.priority}</button>
            <button className="card-options"><img src="http://bit.ly/2BpEJuV" alt=""/></button>
            <button className="card-options"><img src="http://bit.ly/2kdDrIk" alt=""/></button>
            <button className="card-options"><img src={info.assigneeImg} alt=""/></button>
          </div>
          <div className="card-buttons">
            <button onClick={this.edit}className="button-edit">edit</button>
            <button ref='remove' value={info.status} onClick={this.remove}className="button-remove">remove</button>
            <button className="button-progress">in progress</button>
            <button className="button-done">done</button>
          </div>
        </div>
      )
  }
  renderForm(){
    const info = this.props.text;
    return(
        <div className="card-container">
          <textarea ref="newText" id={info.status} className="card-text" defaultValue={info.title}></textarea>
          <div className="card-details">
            <button className="expedite">priority: {info.priority}</button>
            <button className="card-options"><img src="http://bit.ly/2BpEJuV" alt=""/></button>
            <button className="card-options"><img src="http://bit.ly/2kdDrIk" alt=""/></button>
            <button className="card-options"><img src={info.assigneeImg} alt=""/></button>
          </div>
          <div className="card-buttons">
            <button onClick={this.save}className="button-edit">save</button>
            <button onClick={this.remove}className="button-remove">remove</button>
            <button className="button-progress">in progress</button>
            <button className="button-done">done</button>
          </div>
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
