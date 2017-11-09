module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    category: DataTypes.STRING,
    type: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    question: DataTypes.TEXT,
    correct_answer: DataTypes.STRING,
    incorrect_answers__001: DataTypes.STRING,
    incorrect_answers__002: DataTypes.STRING,
    incorrect_answers__003: DataTypes.STRING
  });
  return Question;
};
