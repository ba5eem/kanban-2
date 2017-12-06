import { LOAD_DATA, ADD_DATA, EDIT_DATA, DELETE_DATA } from '../actions';

const dataList = (state = [],action) => { 
  //console.log("Reducer has been activated, current state: ", state)
  switch (action.type){
    case LOAD_DATA:
      //console.log('LOAD_DATA has been activated: ',action.data);
      return action.data;
    case ADD_DATA:
      //console.log('ADD_DATA has been activated: ',action.data);
      return [...state,action.data]
    case EDIT_DATA:
      //console.log('EDIT_DATA has been activated: ',action.data);
      const data = action.data[1];
      let id = data.id
      let arr = state.filter((elem) =>{
        return elem.id !== id;
      })
      //console.log(arr.concat([data]))
      return arr.concat([data]);
    case DELETE_DATA:
      //console.log('DELETE_DATA has been activated: ',action.data);
      return action.data;
    default:
      return state;
  }
}

export default dataList;