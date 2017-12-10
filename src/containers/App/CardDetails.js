import React, { Component } from 'react';
import {checkStatus} from './helpers';

const PriorityButton = ({card}) => { 
  return(<button 
            className="priority" 
            id={card.priority}>priority: {card.priority}
          </button>
    )
}

const GithubOption = ({card}) => {
  return (<button 
            className="card-options">
            <img src="http://bit.ly/2BpEJuV" alt=""/>
          </button>
          )
}

const CommentOption = ({card}) => {
  return (<button 
            className="card-options">
            <img src="http://bit.ly/2kdDrIk" alt=""/>
          </button>
          )
}

const UserOption = ({card}) => {
  return(<button 
            className="card-options">
            <img src={card.assigneeImg} alt=""/>
          </button>
        )
}

const EditButton = ({edit}) => {
  return (<button 
            onClick={edit}
            className="button-edit">edit
          </button>
          )
}

const RemoveButton = ({remove,card}) => {
  return (<button 
            value={card.status} 
            onClick={(e)=>remove(e,card)}
            className="button-remove">remove
          </button>
          )
}

const ProgressButton = ({changeStatus,card,status}) => {
  return (<button 
            onClick={(e)=>changeStatus(e,card)} 
            id={status} 
            value={card.status} 
            className="button-progress">{status}
          </button>
          )
}

const DoneButton = ({card,done,changeStatus}) => {
  return (<button 
            onClick={(e)=>changeStatus(e,card)} 
            id='done' 
            value={card.status} 
            className="button-done">done
          </button>
          )
}

const ArchiveButton = ({archive,card}) => {
  return (<button 
            onClick={(e)=>archive(e,card)} 
            id='archive' 
            value={card.status} 
            className="button-done">archive
          </button>
          )
}




export class CardDetails extends Component {
  render() {
    const {card} = this.props;
    const status = checkStatus(card);
    return (
        <div className="card-container">
          <div className="card-text">{card.title}</div>

          <div className="card-details">
            <PriorityButton card={card} />
            <GithubOption card={card} />
            <CommentOption card={card} />
            <UserOption card={card} />
          </div>

          <div className="card-buttons">
            <EditButton edit={this.props.edit}/>

            <RemoveButton 
              remove={this.props.remove} 
              card={card}>
            </RemoveButton>

            <ProgressButton 
              changeStatus={this.props.status} 
              status={status} 
              card={card}>
            </ProgressButton>
            
            {card.status!=='done'?
              <DoneButton 
                changeStatus={this.props.status} 
                card={card}>
              </DoneButton>
              
            : <ArchiveButton 
                archive={this.props.archive} 
                card={card}>
              </ArchiveButton>
            }
          </div>

        </div>
    );
  }
}
