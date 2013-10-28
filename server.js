var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('static'));

app.get('/avaparts', function (request, response) {
	response.sendfile('data/avaparts.json');
});

app.get('/avaparts/:category', function (request, response) {
	response.sendfile('data/categories/' + request.params.category + '.json');
});

app.get('/avaparts/:category/:id', function (request, response) {
	response.sendfile('data/categories/' + request.params.category + '/' + request.params.id + '.js');
});

var server = http.createServer(app);
server.listen(process.env.PORT || 80, function () {
	require('openurl').open('http://localhost:' + server.address().port);
});
