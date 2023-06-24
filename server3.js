var module = require('./dbmodule3');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http.createServer(function(request, response) {
var data1 = '';

request.on('data', function(chunk) {
            data1 += chunk;
        });

request.on('end', function() {
var name = querystring.parse(data1)["name"];
console.log(name);
var email = querystring.parse(data1)["email"];
console.log(email);
var message = querystring.parse(data1)["message"];
console.log(message);


if (request.url === '/login') {
module.authenticateUser( email,password, response);
            } 
else if (request.url === '/save') {
module.saveUser(name,email,message,response);
            } 
      });
    
}).listen(3000);
console.log("Server started");