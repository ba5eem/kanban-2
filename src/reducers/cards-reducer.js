import {
  REMOVE_CARD,
  UPDATE_TITLE,
  ADD_CARD,
  UPDATE_STATUS,
  UNDO_REMOVE,
  UPDATE_PRIORITY
  } from '../actions'
import {data} from './data';
import {remove,add,priority} from './helpers';

export default function(state=data, action){
  switch(action.type){
    case REMOVE_CARD:
      return remove(action.payload,state);
    case UNDO_REMOVE:
      return [...state,action.payload]
    case UPDATE_TITLE:
      return state;
    case UPDATE_STATUS:
      return [...state];
    case UPDATE_PRIORITY:
      return [...priority(action.payload,state)];
    case ADD_CARD:
      return [...add(state)];
    default:
      return state;
  }
}