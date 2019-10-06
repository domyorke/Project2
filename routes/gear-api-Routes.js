var path = require("path");
var db = require("express");

module.exports = function (app) {

    app.get('/api/gear', function (req, res) {
        res.json(path.join(__dirname, './home.html'))
    });

    //app.get()

};

//API routes do not need a home directory and usually start with /api/xyz