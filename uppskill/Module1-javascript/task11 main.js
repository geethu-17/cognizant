const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("eventError").textContent = "";
    document.getElementById("message").textContent = "";

    // Get form values using form.elements
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["event"].value;

    let valid = true;

    // Name Validation
    if (name === "") {
        document.getElementById("nameError").textContent = " Name is required";
        valid = false;
    }

    // Email Validation
    if (email === "") {
        document.getElementById("emailError").textContent = " Email is required";
        valid = false;
    }

    // Event Validation
    if (selectedEvent === "") {
        document.getElementById("eventError").textContent = " Please select an event";
        valid = false;
    }

    // Success Message
    if (valid) {
        document.getElementById("message").textContent =
            "Registration Successful!";
    }
});