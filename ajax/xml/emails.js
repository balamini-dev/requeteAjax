const request = new XMLHttpRequest();

const aSynchrone = false;
request.open('GET', 'emails.xml', aSynchrone);
request.send();
console.log(request.responseXML);
var emails = request.responseXML.getElementsByTagName('email'); // on récupère toute les balises email dans la variable emails on 

for (var i = 0; i < emails.length; i++) {
	document.getElementById("containt").innerHTML += " email numero " + [i+1] + " : ";
	var to = emails[i].getElementsByTagName('to')[0].innerHTML;
	document.innerHTML = to;
	document.getElementById("containt").innerHTML += to + " ";

	var from = emails[i].getElementsByTagName('from')[0].innerHTML;
	document.innerHTML = from;
	document.getElementById("containt").innerHTML += from + " ";

	var object = emails[i].getElementsByTagName('object')[0].innerHTML;
	document.innerHTML = object;
	document.getElementById("containt").innerHTML += object + " ";

	var message = emails[i].getElementsByTagName('message')[0].innerHTML;
	document.innerHTML = message;
	document.getElementById("containt").innerHTML += message + " ";

	document.getElementById("containt").innerHTML += " <br/> ";

}
