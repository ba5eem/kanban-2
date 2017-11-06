
////////////////////////open api////////////////////////////////
function httpRequest(method,link,body,next){
  console.log('httpRequest lib helper has been fired');
  console.log('XHR body',body)
  console.log('XHR method',method)
  console.log('XHR link',link)
  var xhr = new XMLHttpRequest();
  xhr.open(method,'http://localhost:3000/api/'+link);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.onload = function() {
    next(null,JSON.parse(xhr.response));
  };
  xhr.onerror = function(){
    next(JSON.parse(xhr.response));
  };
  xhr.send(JSON.stringify(body));
}
////////////////////////open api////////////////////////////////

export default httpRequest;


