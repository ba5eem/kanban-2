import {REMOVE_CARD,UPDATE_TITLE,ADD_CARD} from '../actions'
import {data} from './data';
import {remove,add} from './helpers';

export default function(state=data, action){
  switch(action.type){
    case REMOVE_CARD:
      return remove(action.payload,state);
    case UPDATE_TITLE:
      return state;
    case ADD_CARD:
      return [...add(state)];
    default:
      return state;
  }
}