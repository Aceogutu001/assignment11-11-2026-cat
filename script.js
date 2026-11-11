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
        const programmeSelect = document.getElementById("programme");
        const programme = programmeSelect.value;

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

        // Get the descriptive text of the selected programme option
        const programmeText = programmeSelect.options[programmeSelect.selectedIndex].text;

        // Dynamically add the new student record to the table (Question 6 functionality)
        addStudentToTable(fullname, regnumber, programmeText);

        // Success confirmation
        alert(`Success! Registration submitted for ${fullname} (${regnumber}). Welcome to MMUST!`);
        
        // Reset the form after successful validation
        form.reset();
    });
});

// Helper function to insert a new row into the student directory table
function addStudentToTable(name, regNo, prog) {
    const tableBody = document.querySelector("table tbody");
    const newRow = document.createElement("tr");

    // Generate a simple incremental ID based on existing rows
    const rowCount = tableBody.rows.length + 101;

    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${name}</td>
        <td>${regNo}</td>
        <td>${prog}</td>
        <td>1</td>
    `;

    // Append the newly created row to the table body
    tableBody.appendChild(newRow);
}
