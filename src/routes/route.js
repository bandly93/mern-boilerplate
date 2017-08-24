var User = require("../models/user");
var express = require("express");
var infoRouter = express.Router();

infoRouter.get("/",function(req,res){
	User.find(function(err,users){
		console.log("Checking to see if user is in database.");
		if (err){
			console.log("Error! Can't find user!");
			res.send(err);
		}else{
			res.json(users);
			console.log("Successfully Logged in.");
		}
	})
});

infoRouter.post("/",function(req,res){
	let user = new User();
		(req.body.username) ? user.username = req.body.username : null;
		(req.body.password) ? user.password = req.body.password : null;
		(req.body.confirm_password) ? user.confirm_password = req.body.confirm_password : null;
		(req.body.email) ? user.email = req.body.email : null;
		
		user.save(function(err){
		if (err){
			res.send(err);
			console.log("Error, can't add user to database.");
		}else {
			res.json({message:'User successfully added!'});
			console.log("User successfully added!");
		}
	})
});

module.exports = infoRouter;