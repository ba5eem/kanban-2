function destroyData(id,e){
  console.log('destoryData method lib helper has been fired');
  let target = e.target.name;
  console.log('destroyData tartget: ',target);
  let destroyData = {};
    destroyData.id = id;
    
  return destroyData;
}

export default destroyData;


/*id = element id from DB - this can be used for verification against props array*/

/*e represents event - possible definitions e.target.value; etc...*/


