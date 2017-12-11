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

export function priority(payload,state){
  let newPriority;
  let old = payload.priority;
  if(old === 'high'){
    newPriority = 'low';
  }
  if(old === 'low'){
    newPriority = 'med';
  }
  if(old === 'med'){
    newPriority = 'high';
  } 
  if(old === 'done'){
    newPriority = 'done';
  }
  let res = state.map((elem) => {
    if(elem.id === payload.id){
      elem.priority = newPriority;
      return state;
    }
  })
  return state;
}

