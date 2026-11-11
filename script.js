// Wait for the DOM content to load before running scripts
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        // Prevent form submission to validate fields first
        event.preventDefault();

        // Retrieve input values
        const fullname = document.getElementById("fullname").value.trim();
        const regnumber = document.getElementById("regnumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const programme = document.getElementById("programme").value;

        // Simple validation checks
        if (fullname === "") {
            alert("Please enter your full name.");
            return;
        }

        if (regnumber === "") {
            alert("Please enter your MMUST registration number.");
            return;
        }

        if (email === "" || !email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!gender) {
            alert("Please select your gender.");
            return;
        }

        if (programme === "") {
            alert("Please select an academic programme.");
            return;
        }

        // Success confirmation
        alert(`Success! Registration submitted for ${fullname} (${regnumber}). Welcome to MMUST!`);
        
        // Reset the form after successful validation
        form.reset();
    });
});
