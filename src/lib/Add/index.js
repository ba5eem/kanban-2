function addNew(id,e){
  console.log('addNew method lib helper has been fired');
  let target = e.target.name;
  let value = e.target.value;
  let title = (target === 'title');

  let updatedData = {};
    updatedData.id = id;

  if(title)   { updatedData.title   = value} 




  return updatedData;
}

export default addNew;


/*id = element id from DB - this can be used for verification against props array*/

/*e represents event - possible definitions e.target.value; etc...*/


