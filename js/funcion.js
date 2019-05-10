
var usernames = [];


document.getElementById("button").addEventListener("click" , function get_random_username(){
console.log(usernames.length);
  if(usernames.length > 0){
    document.getElementById('output').innerHTML = usernames[0];
    console.log('get_random_username: ' + usernames);
    usernames.splice(0, 1);
  }else {
    generate_username_from_API();
  }
});


document.getElementById("copyButton").addEventListener("click" , function copyUsername(){
  var copyText = document.getElementById("output").innerHTML;
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', copyText)
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
});



function generate_username_from_API()
{
  var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.reddit.com/api/v1/generate_username.json');
xhr.onreadystatechange = function () {
	var DONE = 4; // readyState 4 means the request is done.
	var OK = 200; // status 200 is a successful return.
	if (xhr.readyState === DONE) {
		if (xhr.status === OK) {
      usernames = JSON.parse(xhr.responseText).usernames;
      document.getElementById('output').innerHTML = usernames[0];
      console.log('ALL: ' + usernames);
      usernames.splice(0, 1);
      console.log('ALL: ' + usernames);
      return;
		} else {
      document.getElementById('output').innerHTML = "too match clicks";
			console.log('Error: ' + xhr.status); // An error occurred during the request.
		}
	}
};

xhr.send(null);
}
