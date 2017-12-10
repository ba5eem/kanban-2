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

export function updateStatus(x,y){
  console.log(x)
  console.log(y);
}

