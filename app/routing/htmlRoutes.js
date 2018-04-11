// DEPENDENCIES
var path = require("path");


// ROUTING
module.exports = function(app) {
  // HTML GET Requests
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  //Connect the Submit.js javascript file
  app.get("/submit", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/submit.js"));
  });
  // Connect CSS file
  app.get("/css/style", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
  });
  // Connect background IMG
  app.get("/imgs/footer_lodyas", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/imgs/footer_lodyas.png"));
  });
  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};