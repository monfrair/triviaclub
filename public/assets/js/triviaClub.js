$(document).ready(function() {

var categoryInput = $("#trivia-well").val()

    function getQuestions() {
        $.get("/api/questions", function(data) {
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                // rowsToAdd.push(createQuestionRow(data[i]));
                console.log(data[i].question);
                // var triviaQuestion = $("<p>");
                // triviaQuestion.text(data[i].question)
                $(".triviaQuestion").append("<h2>" + data[i].question + "</h2>")
            }
            //   renderAuthorList(rowsToAdd);
            //   nameInput.val("");
        });
    }
    getQuestions()
        // Function for creating a new list row for authors
        // function createAuthorRow(questionData) {
        //   console.log(questionData);
    // }
});