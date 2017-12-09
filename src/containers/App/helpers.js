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