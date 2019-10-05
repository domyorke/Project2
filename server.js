var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);


db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log('App listening on PORT: ', PORT)
    });
});

//Force True means drop tables
//Within server.js file 
// db.sequelize.sync and wrap this around the app.listen
//check sequelize unit activities
// Force false and true can be leveraged 
//Force true good for testing