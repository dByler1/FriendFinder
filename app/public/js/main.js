

$(document).ready(function () {



  $("#survey-submit").on("click", function (event) {
    event.preventDefault();


    var userInfo = {
      name: $("#name").val().trim(),
      image: $("#image").val().trim(),
      scores: [
        $("#Q1").val().charAt(0),
        $("#Q2").val().charAt(0),
        $("#Q3").val().charAt(0),
        $("#Q4").val().charAt(0),
        $("#Q5").val().charAt(0),
        $("#Q6").val().charAt(0),
        $("#Q7").val().charAt(0),
        $("#Q8").val().charAt(0),
        $("#Q9").val().charAt(0),
        $("#Q10").val().charAt(0)
      ]
    };

    //Send the POST request.
    $.ajax("/api/questions", {
      type: "POST",
      data: userInfo

    }).then(
      function (data) {

        // Grab the result from the AJAX post so that the best match's name and photo are displayed.
        $("#match-name").text(data.name);
        $("#match-img").attr("src", data.photo);

        // Show the modal with the best match
        $("#results-modal").modal("toggle");

      }
    );

  });

})

