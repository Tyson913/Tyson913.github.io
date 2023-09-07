document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll('.container'); // Get all container elements

    // Function to show a form and hide the others
    function showForm(formId) {
        forms.forEach(form => {
            form.style.display = form.id === formId ? 'block' : 'none';
        });
    }

    // Function to randomly position the "No" and "Don't Proceed" buttons
    function moveButtonsRandomly() {
        const buttonsToMove = document.querySelectorAll('.no-button, #Dontproceed');
        buttonsToMove.forEach(button => {
            const maxWidth = window.innerWidth - button.clientWidth;
            const maxHeight = window.innerHeight - button.clientHeight;
            const randomX = Math.random() * maxWidth;
            const randomY = Math.random() * maxHeight;
            button.style.transform = `translate(${randomX}px, ${randomY}px)`;
        });
    }

    // Attach click event listeners to "Yes" buttons
    document.getElementById("yes1").addEventListener("click", function () {
        showForm("f2");
    });

    document.getElementById("yes2").addEventListener("click", function () {
        showForm("f4");
    });

    document.getElementById("yes3").addEventListener("click", function () {
        showForm("f6");
    
    });

    document.getElementById("no3").addEventListener("click", function () {
        showForm("f4");

    });

    // Attach click event listener to "Submit" button
    document.getElementById("submit1").addEventListener("click", function () {
        
        const passwordInput = document.getElementById("codeinputbox");
        if (passwordInput.value.trim() === "")  {
            // Password input is empty, display the required message
            requiredMessage.style.display = "block";
        } else {
            showForm("f3"); // Show the next form after submitting
        }
    });

    // Attach click event listeners to "Proceed" and "Don't Proceed" buttons
    document.getElementById("Proceed").addEventListener("click", function () {
        showForm("f5");
    });

    document.getElementById("Dontproceed").addEventListener("click", function () {
        showForm("f5");
        moveButtonsRandomly(); // Move buttons randomly when "Don't Proceed" is clicked
    });

    // Attach click event listeners to "No" buttons
    document.getElementById("no1").addEventListener("click", function () {
        moveButtonsRandomly(); // Move buttons randomly when "No" is clicked
    });

    document.getElementById("no2").addEventListener("click", function () {
        moveButtonsRandomly(); // Move buttons randomly when "No" is clicked
    });

    document.getElementById("no3").addEventListener("click", function () {
        moveButtonsRandomly(); // Move buttons randomly when "No" is clicked
    });
});
