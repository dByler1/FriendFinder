
$(document).ready(function() {
  
  $("#survey-submit").on("click", function(event) {
    event.preventDefault();
    
    var userInfo = {
      name: $( "#name" ).val().trim(),
      image: $( "#image" ).val().trim()
    }
    var questionAnswers = {
        
        Q1: $( "#Q1" ).val(),
        Q2: $( "#Q2" ).val(),
        Q3: $( "#Q3" ).val(),
        Q4: $( "#Q4" ).val(),
        Q5: $( "#Q5" ).val(),
        Q6: $( "#Q6" ).val(),
        Q7: $( "#Q7" ).val(),
        Q8: $( "#Q8" ).val(),
        Q9: $( "#Q9" ).val(),
        Q10: $( "#Q10" ).val()
    };

    // Send the POST request.
    $.ajax("/api/questions", {
      type: "POST",
      data: {
        questionAnswers: questionAnswers,
        userInfo: userInfo
      }
    }).then(
      function() {
        console.log("created new quote");
        // Reload the page to get the updated list
        //location.reload();
      }
    );
  });
}) 


