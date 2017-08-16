var express = require("express");
var bodyParser = require("body-parser");
var engines = require('consolidate');
var passport = require("passport");
var app = express();
var path = require("path");
var LocalStrategy = require("passport-local");
var mongoose = require("mongoose");
var User = require("./models/user");
var history = require('connect-history-api-fallback');


var URI = "mongodb://localhost:27017/tesing_db"

mongoose.connect(URI, function(err, db) {
  if(!err) {
    console.log("You are now connected to the Mongo database!");
  }else{
  	console.log(err);
  }
});

app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', engines.mustache);
app.set("view engine", "html");
app.use(history());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/',express.static(__dirname + '/views'));


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(3000,function(){
	console.log("You are now connected!");
});