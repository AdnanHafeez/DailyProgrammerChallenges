function getData()  {

  const http = new XMLHttpRequest();
  const url = '/data';
  http.open('GET',url,true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        console.log(http.responseText);
      }
    }
}
