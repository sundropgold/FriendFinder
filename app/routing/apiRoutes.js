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
		var submission = req.body;

		// save survey results in new object
		var newFriend = {
			name: submission.name,
			photo: submission.photo,
			score: [
				parseInt(submission.score[0]),
				parseInt(submission.score[1]),
				parseInt(submission.score[2]),
				parseInt(submission.score[3]),
				parseInt(submission.score[4]),
				parseInt(submission.score[5]),
				parseInt(submission.score[6]),
				parseInt(submission.score[7]),
				parseInt(submission.score[8]),
				parseInt(submission.score[9])
			]
		};

		// handle compatability logic
		var difference = 0;
		var totalDifference = 0;
		var bestDifference = 0;
		var bestFriend;

		// question by question, compare the user's answers to  the friends array
		for (var i = 0; i < friends.length; i++){

			for (var j = 0; j < friends[i].score.length; j++){

				// add up the differences to calculate the totalDifference
				// use absolute value of differences
				difference = Math.abs(newFriend.score[j] - friends[i].score[j]);
				totalDifference = totalDifference + difference; 

			}

			// console.log("totalDifference: " + totalDifference);

			if (bestDifference == 0 && i == 0) {
				// if this is the first time going through the loop
				// set bestDifference to totalDifference

				bestDifference = totalDifference;

				// console.log("bestDiff1: " + friends[i].name + " " + bestDifference);
			}

			else if (totalDifference <= bestDifference) {
				// if this isn't the first time going through the loop
				// compare total diff to bestdiff

				// if total is less than best, set best as total
				bestDifference = totalDifference;

				// console.log("bestDiff2: " + friends[i].name + " " + bestDifference);

				// best friend will be the friend in the index position i
				// save object into variable
				bestFriend = friends[i];

				if (i == 9) {
					bestDifference = 0;

				}
				
			}

			totalDifference = 0;

		}

		// add newFriend to friends array
		friends.push(newFriend);
		res.json(bestFriend);

		bestFriend = {};
	});

};

