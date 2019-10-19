var db = require("../models");

module.exports = function (app) {
    app.get('/api/gear', function (req, res) {
        var query = {};
        // Req.query.author_id was original setting. Find out what this corresponds to. req.query.user_id probably isn't right.

        function getGear() {
            // Here we add an "include property to our options in our findAll" query
            // We set the value to an array of the models we want to include in a left outer join
            // In this case, db.User
            db.Gear.findAll({
                where: query,
                include: [db.User]
            }).then(function (dbGear) {
                res.json(dbGear);
            });
        }

        if (req.query.email) {
            db.User.findOne({
                where: { email: req.query.email }
            }).then(function (dbUser) {
                query.UserId = dbUser.dataValues.id;
                getGear();
            });
        } else {
            getGear();
        }
    });

    // Get route for retrieving a single post
    app.get("/api/gear/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.User
        db.Gear.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function (dbGear) {
            res.json(dbGear);
        });
    });


    // PUT route for updating gear (Works!)
    app.put("/api/gear", function (req, res) {
        db.Gear.update(
            req.body,
            {
                where: {
                    gear: req.body.gear
                }
            }).then(function (dbGear) {
                res.json(dbGear)
            });
    });

    //Set up a function to create gear 
    //(Works!)
    //Actually, why am I unable to add 2 keys the same time?
    app.post("/api/createGear", function (req, res) {
        var UserId;
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(function (dbUser) {
            UserId = dbUser.dataValues.id;

            db.Gear.create({
                gear: req.body.gear,
                UserId: UserId
            }).then(function (dbGear) {
                res.json(dbGear);
            });
        });
    });

    //WORKS!!
    app.delete("/api/gear/:id", function (req, res) {
        db.Gear.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });
};

    // // POST route for saving a new piece of gear
    // app.post("/api/gear", function (req, res) {
    //     db.userProfile.create(req.body).then(function (dbGear) {
    //         res.json(dbGear);
    //     });
    // });