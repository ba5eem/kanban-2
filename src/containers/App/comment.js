import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
  constructor() {
    super();

    this.state={
      editing: false
    }
    this.edit=this.edit.bind(this);
    this.save=this.save.bind(this);
  }

  edit(){
    this.setState({editing: !this.state.editing})
  }
  remove(){
    console.log('removing comment');
  }

  save(){
    var val = this.refs.newText.value;
    console.log('new comment', val);
  }

  renderNormal(){
    return(
        <div className="commentContainer">
          <div className="commentText">{this.props.children}</div>
          <button onClick={this.edit}className="button-edit">Edit</button>
          <button onClick={this.remove}className="button-remove">Remove</button>
        </div>
      )
  }
  renderForm(){
    return(
        <div className="commentContainer">
          <textarea ref="newText" defaultValue={this.props.children}></textarea>
          <button onClick={this.save}className="button-save">Save</button>
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


const ConnectedComment = connect(
  null
)(Comment)

export default ConnectedComment;
