// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================

var app = express();
var PORT = process.env.PORT || 3000;

// Static Files
// =============================================================
// serve static files - css and js

app.use("/assets/bootstrap", express.static(path.join(__dirname, './app/public/assets/bootstrap')));
app.use("/assets/css", express.static(path.join(__dirname, './app/public/assets/css')));
app.use("/assets/js", express.static(path.join(__dirname, './app/public/assets/js')));

// Body Parser
// =============================================================
// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing
// =============================================================

// api routes
require(path.join(__dirname, "./app/routing/apiRoutes.js"))(app);

// html routes
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);

// Start listening
// =============================================================
app.listen(PORT, function(){
	console.log("App listening on PORT " + PORT + ".");
});
