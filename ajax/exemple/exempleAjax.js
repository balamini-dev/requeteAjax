const request = new XMLHttpRequest();

const aSynchrone = false;
request.open('GET', 'exempleAjax.txt', aSynchrone);
request.send(null);

console.log(request.responseText);