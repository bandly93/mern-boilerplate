var express = require("express");
var bodyParser = require("body-parser");
var engines = require('consolidate');
var app = express();
var path = require("path");
var mongoose = require("mongoose");

var URI = "mongodb://localhost:27017/tesing_db"

mongoose.connect(URI, function(err, db) {
  if(!err) {
    console.log("You are now connected to the mongo database!");
  }else{
  	console.log(err);
  }
});

app.use(bodyParser.urlencoded({extended:true}));
app.engine('html', engines.mustache);
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, '../dist')));
app.use('/',express.static(__dirname + '/views'));

app.get("/goodbye",function(req,res){
	res.send("goodbye");
});

app.listen(3000,function(){
	console.log("You are now connected!");
});