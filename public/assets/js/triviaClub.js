$(document).ready(function() {
    var questionArray = [];
    var answerArray = [];

    $("#table").on("change", function() {
        var categoryID = this.value;
        console.log(categoryID)
        questionArray = [];
        answerArray = [];

        function getQuestions() {

            $.get("/api/questions/category/" + categoryID, function(data) {
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i])
                    var pickedQuestion = data[i].question;
                    var correctAnswer = data[i].correct_answer;
                    var inncorrectOne = data[i].incorrect_answers__001;
                    var inncorrectTwo = data[i].incorrect_answers__002;
                    var inncorrectThree = data[i].incorrect_answers__003;
                    // console.log(pickedQuestion);
                    questionArray.push(pickedQuestion)
                    answerArray.push(inncorrectOne)
                    answerArray.push(inncorrectTwo)
                    answerArray.push(inncorrectThree)
                }
                    for (var i = 0; i < questionArray.length; i++) {
                        console.log(questionArray[i])
                    $(".triviaQuestion").append("<h3>" + questionArray[i] + "</h3>")

                    }
            });
        }
        getQuestions()
    })

    // $("#submitBtn").on("click", function(){
    //     getQuestions()
    // })
});