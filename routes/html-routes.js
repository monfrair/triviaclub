var path = require("path");

module.exports = function(app) {
  
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/register", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/register.html"));
    });

    app.get("/trivia", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/trivia.html"));
    });

    app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/user-profile.html"));
    });
};