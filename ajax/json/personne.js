const request = new XMLHttpRequest();

const aSynchrone = false;
request.open('GET', 'personne.json', aSynchrone);
request.send(null);

//console.log(request.responseText);
var json = request.responseText;
var obj = JSON.parse(json);
for (var i = 0; i < obj.length; i++) {
	console.log(obj)
	document.getElementById("containt").innerHTML += "<br/>Nom : " +obj[i].nom+ " <br/>";
	document.getElementById("containt").innerHTML += "Date de Naissance : " +obj[i].dateNaissance+ " <br/>";
	for (var j = 0; j < obj[i].notes.length; j++) {
		document.getElementById("containt").innerHTML += "Notes : " +obj[i].notes[j].matiere+" : " + obj[i].notes[j].notes+ " <br/>";
	}

} 