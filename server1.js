var module = require('./dbmodule1');
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
var phone = querystring.parse(data1)["phone"];
console.log(phone);
var date = querystring.parse(data1)["date"];
console.log(date);
var cod = querystring.parse(data1)["cod"];
console.log(cod);
var upi = querystring.parse(data1)["upi"];
console.log(upi);
var card = querystring.parse(data1)["card"];
console.log(card);
var address = querystring.parse(data1)["address"];
console.log(address);

if (request.url === '/login') {
module.authenticateUser( email,password, response);
            } 
else if (request.url === '/save') {
module.saveUser(name,email,phone,date,cod,upi,card,address,response);
            } 
      });
    
}).listen(3000);
console.log("Server started");