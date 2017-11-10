$(document).ready(function() {
 
    

    function getQuestions() {
        $.get("/api/questions", function(data) {
          var rowsToAdd = [];
          for (var i = 0; i < data.length; i++) {
            rowsToAdd.push(createQuestionRow(data[i]));
            console.log(data);
          }
        //   renderAuthorList(rowsToAdd);
        //   nameInput.val("");
        });
      }


  // Function for creating a new list row for authors
  function createAuthorRow(questionData) {
    console.log(questionData);
    
    
    return newTr;
  }


});