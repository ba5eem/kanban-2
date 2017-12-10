import React, { Component } from 'react';
import { connect } from 'react-redux';
import {checkStatus} from './helpers';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state={
      editing: false
    }
    this.edit=this.edit.bind(this);
    this.save=this.save.bind(this);
    this.remove=this.remove.bind(this);
    this.status=this.status.bind(this);
    this.archive=this.archive.bind(this);
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
    this.props.updateCard(val,this.props.index,stat)
    this.setState({editing: !this.state.editing})
  }

  status(e){
    let newStatus = e.target.id;
    let prevStatus = e.target.value;
    this.props.changeStatus(newStatus,prevStatus,this.props.index);
  }

  archive(e){
    let val = e.target.value;
    this.props.archive(this.props.index,val);
  }

  renderNormal(){
    const info = this.props.text;
    const status = checkStatus(info);
    return(
        <div className="card-container">
          <div className="card-text">{info.title}</div>
          <div className="card-details">
            <button className="priority" id={info.priority}>priority: {info.priority}</button>
            <button className="card-options"><img src="http://bit.ly/2BpEJuV" alt=""/></button>
            <button className="card-options"><img src="http://bit.ly/2kdDrIk" alt=""/></button>
            <button className="card-options"><img src={info.assigneeImg} alt=""/></button>
          </div>
          <div className="card-buttons">
            <button onClick={this.edit}className="button-edit">edit</button>
            <button ref='remove' value={info.status} onClick={this.remove}className="button-remove">remove</button>

            <button onClick={(e)=>this.status(e)} id={status} value={info.status} className="button-progress">{status}</button>
            
            {info.status!=='done'?
            <button onClick={(e)=>this.status(e)} id='done' value={info.status} className="button-done">done</button>
            :<button onClick={(e)=>this.archive(e)} id='archive' value={info.status} className="button-done">archive</button>
            }
          </div>
        </div>
      )
  }
  renderForm(){
    const info = this.props.text;
    const status = checkStatus(info);
    return(
        <div className="card-container">
          <textarea ref="newText" id={info.status} className="card-text-area" defaultValue={info.title}></textarea>
          <div className="card-details">
            <button className="priority" id={info.priority}>priority: {info.priority}</button>
            <button className="card-options"><img src="http://bit.ly/2BpEJuV" alt=""/></button>
            <button className="card-options"><img src="http://bit.ly/2kdDrIk" alt=""/></button>
            <button className="card-options"><img src={info.assigneeImg} alt=""/></button>
          </div>
          <div className="card-buttons">
            <button onClick={this.save}className="button-edit">save</button>
            <button onClick={this.remove}className="button-remove">remove</button>
            
            <button onClick={(e)=>this.status(e)} id={status} value={info.status} className="button-progress">{status}</button>

            {info.status!=='done'?
            <button onClick={(e)=>this.status(e)} id='done' value={info.status} className="button-done">done</button>
            :<button onClick={(e)=>this.archive(e)} id='archive' value={info.status} className="button-done">archive</button>
            }
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
