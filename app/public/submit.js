// "POSTS" our form data to our express server.
$(".submit").on("click", function (event) {
    event.preventDefault();
    // Push each multiple choice input value into an array & check if it is blank;
    var answerArr = [];
    for (i = 1; i < 11; i++) {
        if(($("#" + ("q" + i)).val()) == null){
            alert("Please answer all questions before pressing submit!")
        }
        answerArr.push($("#" + ("q" + i)).val().trim());
    };
    // Ensure that Name and Link to Picture is not blank 
    if($("#inputName").val() == "" || $("#inputPic").val() == ""){
        alert("Please answer all questions before pressing submit!");
        return;
    };
    // Create a "newFriend" object to hold the user data
    var newFriend = {
        name: $("#inputName").val().trim(),
        photo: $("#inputPic").val().trim(),
        scores: answerArr
    };

    console.log(newFriend);

    // Post newFriend to API friends, change the modal content and toggle the modal 
    $.post("/api/friends", newFriend,
        function (data) {
            $("#matchName").text(data.name);
            $('#matchImg').attr("src", data.photo);
            // Show the modal with the best match 
            $("#matchModal").modal('toggle');
            // Clear the form when submitting
            $("#inputName").val("");
            $("#inputPic").val("");
            for (i = 1; i < 11; i++) {
                $("#" + ("q" + i)).val("");
            };
        });

});