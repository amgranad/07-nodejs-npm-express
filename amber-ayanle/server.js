'use strict';

// REVIEWED: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.

const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: './public'});
});

app.get('/new', function(req, res) {
  res.sendFile('new.html', {root: './public'});
});

app.post('/articles', bodyParser, function(request, response) {
  // REVIEWED: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send(request.body);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
