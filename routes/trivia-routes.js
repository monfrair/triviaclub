var db = require("../models");

module.exports = function(app) {
    app.get("/api/questions", function(req, res) {
        db.Question.findAll({}).then(function(data) {
            console.log(data)
            res.json(data)
        })
    })
    app.get("/api/questions/category/:category", function(req, res) {
        db.Question.findAll({
            where: {
                category: req.params.category
            },
            limit: 10
        }).then(function(data) {
            console.log(data)
            res.json(data)
        })
    })
}