var path = require("path");

var friends = require("../data/friends-data.js");

module.exports = function(app) {

	// get JSON object of friends
	app.get("/api/friends", function(req,res){

		res.json(friends);

	});

	// add new friend to friends data
	app.post("/api/friends", function(req,res){

		// handle incoming survey results
		var newFriend = req.body;

		console.log(newFriend);

		// handle compatability logic
		var difference = 0;
		var totalDifference = 0;

		// question by question, compare the user's answers to  the friends array
		for (var i = 0; i < friends.length; i++){

			for (var j = 0; j < friends[i].score.length; j++){

				// add up the differences to calculate the totalDifference
				// use absolute value of differences
				difference = Math.abs(newFriend.score[i] - friends[j].score[i]);
				totalDifference = totalDifference + difference; 

			}

		}

		// add newFriend to friends array
		friends.push(newFriend);

		res.json(newFriend);

	});

};

