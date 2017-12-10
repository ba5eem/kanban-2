import { combineReducers } from 'redux';
import CardsReducer from './cards-reducer.js';



export default combineReducers({
  cards: CardsReducer
})