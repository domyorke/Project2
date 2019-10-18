var express = require('express');
var session = require("express-session");
var path = require('path');
var app = express();
var Passport = require("./config/passportStrategy");
var MySQLStore = require('express-mysql-session')(session);
require('dotenv').config();


var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

//var sessionStore = new MySQLStore(options);

var sqlStore;
if (process.env.NODE_ENV === "production") {
    sqlStore = new mySQLStore({
        user: process.env.JAWSDB_USER,
        password: process.env.JAWSDB_PWD,
        database: process.env.JAWSDB_DB,
        host: process.env.JAWSDB_HOST,
        port: process.env.JAWSDB_PORT
    });
} else {
    sqlStore = new mySQLStore({
        user: process.env.MYSQLUSER,
        password: process.env.MYSQLPWD,
        database: process.env.MYSQLDB,
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT  
    });
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let sessionOptions = {
    //Read express sessions documetation 
    //Check true on resave.
    resave: true,
    saveUnitialized: true,
    secret: "Whatever",
    store: sqlStore
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



db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT: ', PORT)
    });
});


//sync.({force: true})
// Force True means drop tables
// Within server.js file 
// db.sequelize.sync and wrap this around the app.listen
// check sequelize unit activities
// Force false and true can be leveraged 
// Force true good for testing
// 