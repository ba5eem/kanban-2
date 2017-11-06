import httpRequest from '../lib/httpRequest';
/*URI ROUTES for HTTP REQUEST*/
const TEMP = 'temp';
/*HTTP METHODS*/
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DEL = 'DELETE';
/*ACTIONS*/
export const LOAD_DATA = 'LOAD_DATA';
export const ADD_DATA = 'ADD_DATA';
export const EDIT_DATA = 'EDIT_DATA';
export const DELETE_DATA = 'DELETE_DATA';


export const loadData = (data) => {
  console.log('ACTION loadData has been Activated: ',data);
  return function(dispatch){
    return httpRequest(GET,TEMP,null, function(err,data){
      console.log('ACTION loadData before dispatch: ',data);
      dispatch({
        type: LOAD_DATA,
        data: data
      })
    })
  }
}

export const addData = (data) => {
  console.log('ACTION addData has been Activated: ',data);
  return function(dispatch){
    return httpRequest(POST,TEMP,data, function(err,data){
      console.log('ACTION addData before dispatch: ',data);
      dispatch({
        type: ADD_DATA,
        data: data
      })
    })
  }
}

export const editData = (data) => {
  console.log('ACTION editData has been Activated: ',data);
  return function(dispatch){
    return httpRequest(PUT,TEMP,data, function(err,data){
      console.log('ACTION editData before dispatch: ',data);
      dispatch({
        type: ADD_DATA,
        data: data
      })
    })
  }
}

export const deleteData = (data) => {
  console.log('ACTION deleteData has been Activated: ',data);
  return function(dispatch){
    return httpRequest(DEL,TEMP,data, function(err,data){
      console.log('ACTION deleteData before dispatch: ',data);
      dispatch({
        type: ADD_DATA,
        data: data
      })
    })
  }
}