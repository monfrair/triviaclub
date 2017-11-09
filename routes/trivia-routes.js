var db = require("../models");

module.exports = function(app) {
	// GET ALL QUESTIONS
    app.get("/api/questions", function(req, res) {
        db.Question.findAll({}).then(function(data) {
            console.log(data)
            res.json(data)
        })
    })
    //GET 10 QUESTIONS FROM A SPECIFIC CATEGORY
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