import { combineReducers } from 'redux';
import dataList from './dataList.js';
import tempList from './tempList.js';


export default combineReducers({
  dataList,
  tempList
})