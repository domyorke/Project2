var db = require("../models");

module.exports = function (app) {

    app.get('/api/gear', function (req, res) {
        var query = {};
        // Req.query.author_id was original setting. Find out what this corresponds to. req.query.user_id probably isn't right.
        if (req.query.user_id){
            query.UserID = req.query.user_id;
        }
        // Here we add an "include property to our options in our findAll" query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, db.User
        db.userProfile.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbGear){
            res.json(dbGear);
        });
    });

     // Get route for retrieving a single post
  app.get("/api/gear/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.userProfile.findOne({
      where: {
        id: req.params.id
      },
      include: [db.User]
    }).then(function(dbGear) {
      res.json(dbGear);
    });
  });

 // POST route for saving a new piece of gear
 app.post("/api/gear", function(req, res) {
    db.userProfile.create(req.body).then(function(dbGear) {
      res.json(dbGear);
    });
  });

 // PUT route for updating gear
 app.put("/api/gear", function(req, res) {
    db.userProfile.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbGear) {
      res.json(dbGear);
    });
  });
};