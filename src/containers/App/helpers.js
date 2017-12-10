export function filter(arr,key,query){
  const res = arr.filter((elem)=>{
    return elem[key] === query;
  })
  return res;
}

export function remove(arr,i){
  let res = arr;
  res.splice(i,1);
  return res;
}

export function archive(arr,i){
  return arr[i];
}


export function update(arr,i,newText){
  let res = arr;
  res[i].title = newText;
  return res;
}

export function add(arr){
  let res = arr;
  let card = {
    title: "add title here",
    assignee: 'undefined',
    assigneeImg: "http://bit.ly/2AqnxFj",
    status: 'ready',
    priority: 'low'
  }
  res.push(card);
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

