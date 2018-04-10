// WHY DO I GET "UNEXCEPTED TOKEN < SURVEY.JS 1" IF I USE THIS FILE???

// "POSTS" our form data to our express server.
$(".submit").on("click", function (event) {
    event.preventDefault();
    // **NEED TO MAKE SURE THERE ARE NO BLANKS**************
    // **NEED TO HAVE A MODAL POP UP -- creat modal in HTML, then push to it
    //  **NEED TO CREAT FUNCTION IN API ROUTE TO DETERMINE BEST MATCH  
    // $("#matchName").text(data.name);
    // $('#matchImg').attr("src", data.photo);
    // // Show the modal with the best match 
    // $("#resultsModal").modal('toggle');

    var answerArr = [];
    for (i = 1; i < 11; i++) {
        answerArr.push($("#" + ("q" + i)).val().trim());
    };

    var newFriend = {
        name: $("#inputName").val().trim(),
        photo: $("#inputPic").val().trim(),
        scores: answerArr
    };

    console.log(newFriend);

    $.post("/api/friends", newFriend,
        function (data) {
            // Clear the form when submitting
            $("#inputName").val("");
            $("#inputPic").val("");
            for (i = 1; i < 11; i++) {
                $("#" + ("q" + i)).val("1");
            };
        });

});
