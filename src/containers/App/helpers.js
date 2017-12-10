export function filter(arr,key,query){
  const res = arr.filter((elem)=>{
    return elem[key] === query;
  })
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

