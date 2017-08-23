'use strict'
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var engines = require('consolidate');
var path = require("path");
var history = require('connect-history-api-fallback');
var app = express();
var router = express.Router();
var User = require("./models/user");
var port = 3000;

//mongodb
var URI = "mongodb://localhost:27017/testing_db"
mongoose.connect(URI, function(err, db) {
	if(!err) {
   	console.log("You are now connected to the Mongo database!");
	}else{
		console.log(err);
	}
}); 

//server 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.engine('html', engines.mustache);
app.set("view engine", "html");
app.use(history());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/',express.static(__dirname + '/views'));

app.route("/logins")
	.get(function(req,res){
		User.find(function(err,users){
			if (err)
				res.send(err);
			res.json(users);
		});
	})
	.post(function(req,res){
		console.log('posted')
		let user = new User();
		(req.body.username) ? user.username = req.body.username : null;
		(req.body.password) ? user.password = req.body.password : null;
		
		user.save(function(err){
			if (err)
				res.send(err);
			res.json({message:'Comment successfully added!'});
		});
	});


app.use('/api',router);

app.listen(port,function(){
	console.log("api running on port 3000");
});