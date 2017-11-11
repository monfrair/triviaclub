var db = require("../models");

module.exports = function(app) {
    // ADDS NEW USER TO DATABASE
    app.post("/api/user", function(req, res) {
        console.log(req.body);
        db.User.create({
            name: req.body.name,
            age: req.body.age,
        }).then(function(data) {
            res.json(data);
        });
    });
    // UPDATE THE USER DATA 
    app.put("/api/user", function(req, res) {
        db.User.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(data) {
            res.json(data)
        })
    })
};