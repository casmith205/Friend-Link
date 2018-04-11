// "POSTS" our form data to our express server.
$(".submit").on("click", function (event) {
    event.preventDefault();
    // **NEED TO MAKE SURE THERE ARE NO BLANKS**************

    var answerArr = [];
    for (i = 1; i < 11; i++) {
        if(($("#" + ("q" + i)).val()) == null){
            alert("Please answer all questions before pressing submit!")
        }
        answerArr.push($("#" + ("q" + i)).val().trim());
    };

    if($("#inputName").val() == "" || $("#inputPic").val() == ""){
        alert("Please answer all questions before pressing submit!");
        return;
    }
    var newFriend = {
        name: $("#inputName").val().trim(),
        photo: $("#inputPic").val().trim(),
        scores: answerArr
    };

    console.log(newFriend);

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