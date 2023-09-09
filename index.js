
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll('.container'); // Get all container elements

    // Function to show a form and hide the others
    function showForm(formId) {
        forms.forEach(form => {
            form.style.display = form.id === formId ? 'block' : 'none';
        });
    }

    // Function to randomly position the "No" and "Don't Proceed" buttons
    function moveButtonsRandomly() {
        const buttonsToMove = document.querySelectorAll('.no-button, .no-button2, #Dontproceed');
        buttonsToMove.forEach(button => {
            const maxWidth = window.innerWidth - button.clientWidth;
            const maxHeight = window.innerHeight - button.clientHeight;
            const randomX = Math.random() * maxWidth;
            const randomY = Math.random() * maxHeight;
            button.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }

    document.querySelector(".yes-button[data-target='f2']").addEventListener("click", function () {
        showForm("f2");
    });

    document.querySelector(".yes-button[data-target='f4']").addEventListener("click", function () {
        showForm("f4");
    });

    document.querySelector(".yes-button[data-target='f6']").addEventListener("click", function () {
        showForm("f6");
    });

    // Attach click event listener to "Submit" button
document.querySelector(".submit-button[data-target='f3']").addEventListener("click", function () {
        const codeInput = document.querySelector("#codeinputbox").value;

        // Check if the code is valid (equal to "143")
        if (codeInput === "143") {
            showForm("f3"); // Handle the submit action here
        } else {
            // Display an error message
            alert("Invalid code. Please enter the correct code to proceed.");
        }
    });
    document.querySelector(".submit-button[data-target='f5']").addEventListener("click", function () {
        showForm("f5");
    });

    // Move buttons randomly when "Don't Proceed" is clicked

    // Attach click event listeners to "No" buttons
    document.querySelector(".no-button[data-target='f3']").addEventListener("click", function () {
        moveButtonsRandomly(); // Move buttons randomly when "No" is clicked
    });

    document.querySelector(".no-button2[data-target='f6']").addEventListener("click", function () {
        showForm("f6");
        moveButtonsRandomly(); // Move buttons randomly when "No" is clicked
    });

    document.querySelector(".d[data-target='f7']").addEventListener("click", function () {
        showForm("f7");
    });

    document.querySelector(".i[data-target='f9']").addEventListener("click", function () {
        showForm("f9");
    });

    document.querySelector(".o[data-target='f8']").addEventListener("click", function () {
        showForm("f8");
    });

    document.querySelector(".yes-button[data-target='f10']").addEventListener("click", function () {
        showForm("f10");
    });

    document.querySelector(".no-button[data-target='f10']").addEventListener("click", function () {
        showForm("f10");
    });

document.querySelector(".submit-button2[data-target='f9']").addEventListener("click", function () {
        showForm("f9");
    });

});
