const request = new XMLHttpRequest();

const aSynchrone = false;
request.open('GET', 'https://www.google.com', aSynchrone);
request.send(null);

request.reponseText;