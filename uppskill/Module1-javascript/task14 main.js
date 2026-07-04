$(document).ready(function () {

    // Handle Register Button Click
    $("#registerBtn").click(function () {

        alert("Registration Successful!");

        // Fade Out Event Card
        $("#eventCard").fadeOut(1000);

        // Fade In Again
        $("#eventCard").fadeIn(1000);

    });

});