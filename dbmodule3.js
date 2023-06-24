var databaseUrl = "mongodb://127.0.0.1:27017/mydb";
var mongojs = require("./node_modules/mongojs");
var db = mongojs(databaseUrl);
console.log("Connected to MongoDB");

exports.authenticateUser = function(email,password, response) {
db.feedback.find({ "email": email,"password":password },
	function(err, users) 
	{
		if (err || !users) {
		response.write("Not authorized user");
		response.end();
            } 
		else if (users.length == 0) {
		response.write("Not authorized user");
		response.end();
            } 
		else {
		response.write("Authorized user");
		response.end();
            }
        });
}

exports.saveUser = function(name,email,message,response) {
console.log('Saving user to mongo');
db.feedback.insert({ "name":name,"email": email,"message":message },
function(err, saved) 
{
	if (err || !saved)
		console.log(err);
	else
		response.write("Thanks for your feedback!");
		response.end();
    });
}