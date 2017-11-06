function filter(arr,pred){
  console.log('filter method lib helper has been fired');
  const data = arr.filter((elem,pred) => {
  return elem.pred === 'argument';  
});
  return data;
}


export default filter;