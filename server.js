
var http = require('http');
var module = require("./modules/module.js");
var conf = require('./configs/conf.json');


http.createServer(function(req, res){
	res.writeHead(300, {'Content-Type': 'text/html; charset=utf-8'});
	res.end(module);	
	
}).listen(8080);

console.log('Server running on port 8080.');