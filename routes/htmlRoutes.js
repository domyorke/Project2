// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // blog route loads blog.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // authors route loads author-manager.html
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });


  app.get("/userandgear", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/userandgear.html"));
    //protect this path to be used only by a logged in user
  });

  // app.get("*", function (req, res){
  //   res.sendFile(path.join(__dirname, "../public/home.html"))
  // })

};