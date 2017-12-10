export function remove(payload,state){
  let res = state.filter((elem) =>{
      return elem.id !== payload.id;
  });
  return res;
}



export function archive(arr,i){
  return arr[i];
}

export function add(state){
  let res = state;
  let card = {
    title: "add title here",
    assignee: 'undefined',
    assigneeImg: "http://bit.ly/2AqnxFj",
    status: 'ready',
    priority: 'low'
  }
  res.unshift(card);
  return res;
}


export function status(newArr,prevArr,i,status){
  let old = prevArr;
  old[i].status = status;
  let res = newArr;
  let x = old.splice(i,1);
  let y = x.pop();
  res.push(y);
  return res;
}


export function checkStatus(info){
  let status = info.status;
  if(status === 'ready'){
    return 'progress'
  }
  if(status === "progress"){
    return 'ready'
  }
  if(status === 'done'){
    return 'progress'
  }
}

