var path = require("path");
var express = require("express");

module.exports = function(app) {

	// survey page
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, "../../app/public/survey.html"));
	});
	
	// index page
	app.get("*", function(req,res){
		res.sendFile(path.join(__dirname, "../../app/public/home.html"));
	});


};