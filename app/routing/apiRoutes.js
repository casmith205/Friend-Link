// LOAD DATA
var friends = require("../data/friends");

// ROUTING
module.exports = function(app) {
  // API GET Requests
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // When a user submits form data (a JSON object), the JSON is pushed to the array
  app.post("/api/friends", function(req, res) {
      friends.push(req.body);
  });

};
