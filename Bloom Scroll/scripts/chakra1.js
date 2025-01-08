// Form validation for "Join" section
document.getElementById("join-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    // Basic validation
    if (name === "" || email === "") {
        alert("Please fill out both fields!");
        return;
    }

    // Display success message
    alert("Thank you for joining the movement, " + name + "!");

    // Reset form
    document.getElementById("join-form").reset();
});
