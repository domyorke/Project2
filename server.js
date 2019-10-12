var express = require('express');
var session = require("express-session");
var path = require('path');
var app = express();
var Passport = require("./config/passportStrategy");


var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let sessionOptions = {
    //Read express sessions documetation 
    //Check true on resave.
    resave: true,
    saveUnitialized: true,
    secret: "Whatever"
}

app.use(session(sessionOptions));
app.use(Passport.initialize());
app.use(Passport.session());

// Static directory
//Do I need this?
app.use(express.static("public"));


//Middleware
require("./routes/gear-api-Routes.js")(app);
require("./routes/user-api-routes.js")(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/authenticationRoutes.js")(app);



db.sequelize.sync({force: true}).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT: ', PORT)
    });
});



// Force True means drop tables
// Within server.js file 
// db.sequelize.sync and wrap this around the app.listen
// check sequelize unit activities
// Force false and true can be leveraged 
// Force true good for testing
//