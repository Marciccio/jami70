
function showHello(str){ 
var xmlrequest = new XMLHttpRequest(); //DICHIARO OGGETTO REQUEST

request.onreadystatechange = function(){ 
	if(this.readyState == 4 && this.status == 200){ 
	console.log(request.responseText);
	document.getElementById("ServerResponse").innerHTML = request.responseText;

};

request.open("GET","saluto?user=" + str, true); //SETTO RICHIESTA PER IL SERVER,TRUE SPECIFICA CHIAMATA ASINCRONA
request.send(); //INVIO


}
}