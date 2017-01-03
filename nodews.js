var http = require('http');
var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.logger());
app.use(app.router);
app.use(express.static(__dirname +'/'));



app.use(function (request, response){
	var agent = request.header('User-Agent');

	//console.log(request.headers);
	console.log(agent);
		
	if(agent.toLowerCase().match(/chrome/)){
		fs.readFile('index.html',function(error, data){
			response.writeHead(232, {'Content-Type': 'text/html'});
			response.end(data);
		});		
	}	else {
		response.send(232,'<h1>Not chrome! Come to Chrome~</h1>');
	}
	
});

app.get('/project1.html',function (request,response){
	fs.readFile('project1.html',function(error, data){
			response.writeHead(207, {'Content-Type': 'text/html'});
			response.end(data);
		});
});

app.get('/project2.html',function (request,response){
	fs.readFile('project2.html',function(error, data){
			response.writeHead(207, {'Content-Type': 'text/html'});
			response.end(data);
		});
});

app.get('/project3.html',function (request,response){
	fs.readFile('project3.html',function(error, data){
			response.writeHead(207, {'Content-Type': 'text/html'});
			response.end(data);
		});
});


http.createServer(app).listen(52283, function(){
	console.log('Server running at local:52283');
});