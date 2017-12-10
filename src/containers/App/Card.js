import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardDetails} from './CardDetails';


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
  remove(e,card){
    this.props.remove(card);
  }

  save(e,card){
    let {value} = this.refs.newText;
    this.props.updateCardTitle(value,card);
    this.setState({editing: !this.state.editing})
  }

  status(e,card){
    let {id} = e.target;
    this.props.updateCardStatus(id,card);
  }

  archive(e,card){
    this.props.archive(card);
  }

  renderNormal(){
    const card = this.props.text;
    return( <CardDetails
              card={card}
              remove={this.remove}
              save={this.save}
              status={this.status}
              archive={this.archive}
              edit={this.edit}/>  
      )
  }
  renderForm(){
    const card = this.props.text;
    const status = 'holla';
    return(
        <div className="card-container">
          <textarea ref="newText" className="card-text-area" defaultValue={card.title}></textarea>
          <div className="card-details">
            <button className="priority" id={card.priority}>priority: {card.priority}</button>
            <button className="card-options"><img src="http://bit.ly/2BpEJuV" alt=""/></button>
            <button className="card-options"><img src="http://bit.ly/2kdDrIk" alt=""/></button>
            <button className="card-options"><img src={card.assigneeImg} alt=""/></button>
          </div>
          <div className="card-buttons">
            <button onClick={(e)=>this.save(e,card)}className="button-edit">save</button>
            <button onClick={this.remove}className="button-remove">remove</button>
            
            <button onClick={(e)=>this.status(e)} id={status} value={card.status} className="button-progress">{status}</button>

            {card.status!=='done'?
            <button onClick={(e)=>this.status(e)} id='done' value={card.status} className="button-done">done</button>
            :<button onClick={(e)=>this.archive(e)} id='archive' value={card.status} className="button-done">archive</button>
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
