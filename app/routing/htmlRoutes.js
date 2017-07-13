var path = require("path");

module.exports = function(app) {
	
	// index page
	app.use("/", function(req,res){
		res.sendFile(path.join(__dirname, "app/public/home.html"));
	});

	// survey page
	app.get("/survey", function(req,res){
		res.sendFile(path.join(__dirname, "app/public/survey.html"));
	});

};