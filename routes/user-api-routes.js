var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.User
    db.User.findAll({
      include: [db.userProfile]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.get("/api/post/:id", function(req, res) {
    //Here we add an "include" property to our options in our findOne query.
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.userProfile
    db.User.findOne({
        where: {
            id: req.params.id
        },
        include:[db.userProfile]
    }).then(function(dbUser) {
        res.json(dbUser); 
    });
  });

app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser){
        res.json(dbUser);
    });
});


app.delete("/api/authors/:id", function(req, res){
    db.Author.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(dbUser){
        res.json(dbAuthor);
    });
});
};
