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

export function undo(arr,i){
  return arr[i];
}

export function update(arr,i,newText){
  let res = arr;
  res[i].title = newText;
  return res;
}

export function add(arr,card){
  let res = arr;
  res.push(card);
  return res;
}

