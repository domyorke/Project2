var path = require("path");
var db = require("express");

module.exports = function (app) {
    app.get("api/authors", function (req, res) {
        db.Author.findAll({
            include: [db.gear]
        }).then(function(dbUser))
    }
    )
}