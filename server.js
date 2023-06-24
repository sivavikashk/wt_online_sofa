var module = require('./dbmodule');
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
var password = querystring.parse(data1)["password"];
console.log(password);
var password1 = querystring.parse(data1)["password1"];
console.log(password1);
var email = querystring.parse(data1)["email"];
console.log(email);
var phone = querystring.parse(data1)["phone"];
console.log(phone);

if (request.url === '/login') {
module.authenticateUser( email,password, response);
            } 
else if (request.url === '/save') {
module.saveUser(name,password,password1, email,phone,response);
            } 
      });
    
}).listen(3000);
console.log("Server started");