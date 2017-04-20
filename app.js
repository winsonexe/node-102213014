var http = require('http');
var port = 7774;
var hostname = '127.0.0.1';
var request = require("request");
var fs = require('fs');


http.createServer(function (req, res) {
	res.writeHead(200);
	res.writeHead(200, { 'Content-Type': 'text/html'});
	request.post({url:'http://ycchen.im.ncnu.edu.tw/join.php', form: {name:'Bob',sex:'male'}}, 
		function(err,httpResponse,body){
			res.write(body);
			res.end();
	});
	
}).listen(port, hostname);

