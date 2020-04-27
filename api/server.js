const express = require('express'); //Import du module servant à construire l'application web
const app = express(); //Initialisation du module Express.js
let port = 3000; //On définit le port d'écoute de l'API
app.set('port', port); //On indique à l'API d'écouter sur le port défini ci-dessus
app.listen(port, function() { //On lance l'écoute de l'API
  console.log("API running on localhost:" + port); //On affiche en console un message indiquant que l'API est en écoute
});
//On traite le cas des requêtes HTTP avec la méthode GET sur la route http://localhost:3000/
app.get('/', function(req, res) {
  console.log('HTTP request: GET on route http://localhost:3000/'); //On affiche dans la console du serveur qu'une requête a été reçue
  return res.end(); //On répond simplement à la requête, sans transmettre d'information (si ce n'est un code de status 200 envoyé par défaut)
});
//On traite le cas des requêtes HTTP avec la méthode GET sur la route http://localhost:3000/text-message
app.get('/text-message', function(req, res) {
  console.log('HTTP request: GET on route http://localhost:3000/text-message'); //On affiche dans la console du serveur qu'une requête a été reçue
  return res.send("Welcome to API!"); //On répond en renvoyant un message en chaîne de caractères
});
//On traite le cas des requêtes HTTP avec la méthode GET sur la route http://localhost:3000/json-message
app.get('/json-message', function(req, res) {
  console.log('HTTP request: GET on route http://localhost:3000/json-message'); //On affiche dans la console du serveur qu'une requête a été reçue
  let message = { message: "Welcome to API!"};
  return res.send(message); //On répond en renvoyant un objet JSON
});
//On traite le cas des requêtes HTTP avec la méthode GET sur la route http://localhost:3000/html-message
app.get('/html-message', function(req, res) {
  console.log('HTTP request: GET on route http://localhost:3000/html-message'); //On affiche dans la console du serveur qu'une requête a été reçue
  let message = "<p>Welcome to API!</p>";
  return res.send(message); //On répond en renvoyant un message au format HTML
});
