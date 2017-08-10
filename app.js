var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

var serve = serveStatic('./builds/production/', {'index': ['index.html', 'index.htm']})

var server = http.createServer(function onRequest (req, res) {
    serve(req, res, finalhandler(req, res));
});

server.listen(8080, function() {
    console.log('Server listening on localhost8080')
});