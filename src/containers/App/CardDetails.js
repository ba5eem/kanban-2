import React, { Component } from 'react';
import {checkStatus} from './helpers';

export const PriorityButton = ({card,handler,priority}) => { 
  const idStyle = card.priority !== 'done' ? card.priority : 'complete';
  return(<div className="priority-change">
            <div 
              onClick={(e)=>handler(e,card)}
              className="priority" 
              style={priority}
              id={idStyle}>{card.priority}
            </div>
          </div>
    )
}

export const GithubOption = ({card}) => {
  return (<button 
            className="card-options">
            <a href="https://github.com/ba5eem/React-StarterPack/tree/kanban" className="link">
              <img src="http://bit.ly/2BpEJuV" alt=""/>
            </a>
          </button>
          )
}

export const CommentOption = ({card}) => {
  return (<button 
            className="card-options">
            <a href="https://github.com/ba5eem/React-StarterPack/labels/help%20wanted" className="link">
              <img src="http://bit.ly/2kdDrIk" alt=""/>
            </a>
          </button>
          )
}

export const UserOption = ({card}) => {
  return(<button 
            className="card-options">
            <img  src={card.assigneeImg} alt=""/>
          </button>
        )
}

export const EditButton = ({name,handler,card}) => {
  return (<button 
            onClick={(e)=>handler(e,card)}
            className="button-edit">{name}
          </button>
          )
}

export const RemoveButton = ({remove,card,view}) => {
  if(view){
  return (<button 
            value={card.status} 
            onClick={(e)=>remove(e,card)}
            className="button-remove">remove
          </button>
          )
  }else{ return (<button 
            value={card.status} 
            className="button-remove">review
          </button>
          )
  }
}

export const ProgressButton = ({handler,card,status}) => {
  return (<button 
            onClick={(e)=>handler(e,card)} 
            id={status} 
            value={card.status} 
            className="button-progress">{status}
          </button>
          )
}

export const DoneButton = ({card,done,handler}) => {
  return (<button 
            onClick={(e)=>handler(e,card)} 
            id='done' 
            value={card.status} 
            className="button-done">done
          </button>
          )
}

export const ArchiveButton = ({archive,card,view}) => {
  return (<button 
            onClick={(e)=>archive(e,card)} 
            id='archive' 
            value={card.status} 
            className="button-done">{view ? "archive" : "review" }
          </button>
          )
}




export class CardDetails extends Component {
  render() {
    const {card} = this.props;
    const status = checkStatus(card);
    const {view} = this.props;
    return (
        <div className="card-container" draggable='true' onDragOver={(e)=>this.props.onDragOver(e)} onDrag={(e)=>this.props.drag(e,card)} onDrop={(e)=>this.props.onDrop(e,card)}>
          <div className="card-text">{card.title}</div>

          <div className="card-details">
            <PriorityButton  handler={this.props.priority} priority={this.props.style} card={card} />
            <GithubOption card={card} />
            <CommentOption card={card} />
            <UserOption card={card} />
          </div>

          <div className="card-buttons">
            <EditButton handler={this.props.edit} name='edit'/>

            <RemoveButton 
              remove={this.props.remove}
              view={view} 
              card={card}>
            </RemoveButton>


            <ProgressButton 
              handler={this.props.status} 
              status={status} 
              card={card}>
            </ProgressButton>
            
            {card.status!=='done'?
              <DoneButton 
                handler={this.props.status} 
                card={card}>
              </DoneButton>
              
            : <ArchiveButton 
                view={view}
                archive={this.props.archive} 
                card={card}>
              </ArchiveButton>
            }
          </div>

        </div>
    );
  }
}

