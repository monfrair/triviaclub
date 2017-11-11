module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
  var triviaQuestions = sequelize.define("Post", {
    firstName: 
=======
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
>>>>>>> c23279e4f988d0ac754d9eb0622ce8cb6aa51130
