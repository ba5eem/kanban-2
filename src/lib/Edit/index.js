function edit(id,e){
  console.log('edit method lib helper has been fired');
  let target = e.target.name;
  let value = e.target.value;
  let title = (target === 'title');
  let updatedData = {};
    updatedData.id = id;

  if(title)   { updatedData.title   = value} 

  if(e.charCode === 13){/*IF ENTER IS HIT SAVE CHANGE*/
    if(title)      { updatedData.title      = value}
  }

  return updatedData;
}

export default edit;


/*id = element id from DB - this can be used for verification against props array*/

/*e represents event - possible definitions e.target.value; etc...*/


