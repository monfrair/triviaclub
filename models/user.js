module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: DataTypes.INTEGER,
        correctAnswers: DataTypes.INTEGER,
        incorrectAnswers: DataTypes.INTEGER
    })
    return User;
}