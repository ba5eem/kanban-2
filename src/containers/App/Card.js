import React, { Component } from 'react';
import {CardDetails,PriorityButton,ProgressButton,GithubOption,CommentOption,UserOption,RemoveButton,DoneButton,ArchiveButton} from './CardDetails';
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
    this.drag=this.drag.bind(this);
    this.onDrop=this.onDrop.bind(this);
    this.onDragOver=this.onDragOver.bind(this);
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

  drag(e,card){
    this.props.drag(e,card);
  }
  onDragOver(e){
    e.preventDefault();
  }

  onDrop(e,card){
    this.props.onDrop(e,card); 
  }

  renderNormal(){
    const card = this.props.text;
    return( <CardDetails
              card={card}
              drag={this.drag}
              onDragOver={this.onDragOver}
              onDrop={this.onDrop}
              remove={this.remove}
              status={this.status}
              archive={this.archive}
              edit={this.edit}/>  
      )
  }
  renderForm(){
    const card = this.props.text;
    const status = checkStatus(card);
    return(
      <div className="card-container" draggable='true' onDragOver={(e)=>this.onDragOver(e)} onDrag={(e)=>this.drag(e,card)} onDrop={this.drop}>
          <textarea 
            ref="newText" 
            className="card-text-area" 
            defaultValue={card.title}>
          </textarea>
          <div className="card-details">
            <PriorityButton card={card} />
            <GithubOption card={card} />
            <CommentOption card={card} />
            <UserOption card={card} />
          </div>
          <div className="card-buttons">
            <button 
              onClick={(e)=>this.save(e,card)}
              className="button-edit">save
            </button>
            <RemoveButton 
              remove={this.remove} 
              card={card}>
            </RemoveButton>
            <ProgressButton 
              handler={this.status} 
              status={status} 
              card={card}>
            </ProgressButton>
            {card.status!=='done'?
              <DoneButton 
                handler={this.status} 
                card={card}>
              </DoneButton>
              
            : <ArchiveButton 
                archive={this.archive} 
                card={card}>
              </ArchiveButton>
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




export default Card;
