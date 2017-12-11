export function filter(arr,key,query){
  const res = arr.filter((elem)=>{
    return elem[key] === query;
  })
  return res;
}

export function styleChange(id){
  const low = {backgroundColor: '#bae67e'}
  const med = {backgroundColor: '#ffcc66'}
  const high = {backgroundColor: '#f28779'}
  if(id === 'high'){
    return low;
  }
  if(id === 'low'){
    return med;
  }
  if(id === 'med'){
    return high;
  }   
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

