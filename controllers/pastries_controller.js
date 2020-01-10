
// API ROUTES

var db = require("../models");

module.exports = function (app) {
    //1 
    app.get("/api/pastry", function (req, res) {
        db.Pastry2.findAll({}).then(function (pastries_db) {
            res.json(pastries_db);
        });
    });

    //2
    app.post("/api/pastry", function (req, res) {
        db.Pastry2.create({
            text: req.body.text,
        }).then(function (pastries_db) {
            res.json(pastries_db);
        }).catch(function (err) {
            res.json(err);
        });
    });

    app.delete("/api/pastry/:id", function (req, res) {
        db.Pastry2.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (pastries_db) {
            res.json(pastries_db);
        });
    });

    app.put("/api/pastry/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.Todo.update({
            text: req.body.text,
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (pastries_db) {
            res.json(pastries_db);
        }).catch(function (err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        });
    });
};
