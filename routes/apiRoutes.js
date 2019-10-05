var path = require("path");

module.exports = function (app) {

    app.get('/api/', function (req, res) {
        res.json(path.join(__dirname, './home.html'))
    });

    //app.get()

};

//API routes do not need a home directory and usually start with /api/xyz