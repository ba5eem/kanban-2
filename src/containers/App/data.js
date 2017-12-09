export const data = [
  {
    title: "register for honolulu marathon",
    assignee: 'James',
    assigneeImg: "http://bit.ly/2iILsof",
    status: 'progress',
    priority: 'low'
  },
  {
  title: "start running",
  assignee: 'James',
  assigneeImg: "http://bit.ly/2iILsof",
  status: 'ready',
  priority: 'high'
  },
  {
  title: "try out that new korean-bbq buffet",
  assignee: 'James',
  assigneeImg: "http://bit.ly/2iILsof",
  status: 'done',
  priority: 'complete'
  },
  {
  title: "setup trust fund for daughter",
  assignee: 'Michelle',
  assigneeImg: "http://bit.ly/2yU5pS0",
  status: 'ready',
  priority: 'medium'
  },
  {
  title: "plan opening speech for board meeting",
  assignee: 'Michelle',
  assigneeImg: "http://bit.ly/2yU5pS0",
  status: 'progress',
  priority: 'low'
  }
];

export function filter(arr,key,query){
  const res = arr.filter((elem)=>{
    return elem[key] === query;
  })
  return res;
}


