// LOAD DATA
var friends = require("../data/friends");

// ROUTING
module.exports = function (app) {
  // API GET Requests
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // API POST Requests
  // When a user submits form data (a JSON object), the JSON is pushed to the array
  app.post("/api/friends", function (req, res) {
    // Creating a variable to hold the most accurate match info
    var match = {
      name: "",
      photo: "",
      diffScore: 500
    };

    // Parsing the user's survey after POST 
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    // Creating a variable to hold the total difference
    var totalDifference = 0;

    //Loop through each friend in the database
		for  (var i=0; i< friends.length; i++) {
      totalDifference = 0;
			// Loop through all the scores of each friend in database
			for (var j=0; j< friends[i].scores.length; j++){
        // Calc the diff between the scores and sum them into the totalDifference
        // Takes the absolute value of the userScore at position j minus friend at position i's score at position j
				totalDifference += Math.abs((userScores[j]) - (friends[i].scores[j]));

				// If the sum of differences is less then the differences of the current match
				if (totalDifference <= match.diffScore){

					// Update the match to be the friend at position i
					match.name = friends[i].name;
					match.photo = friends[i].photo;
					match.diffScore = totalDifference;
				}
			}
		}

    // Push userData to friendArr after match is found (otherwise, you will always be your own best friend!)
		friends.push(userData);
    console.log(totalDifference)
		// Return JSON with the user's match. This is what will be used to populate the modal
    res.json(match);
    console.log(match);
  });

};
