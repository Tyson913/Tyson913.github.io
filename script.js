window.addEventListener('scroll', function () {
    try {
        const scrollPercentage = (window.scrollY / document.body.scrollHeight) * 100;
        console.log('Scroll Percentage:', scrollPercentage);

        const main = document.querySelector('body');
        const footer = document.querySelector('.footer');
        const footerTop = footer.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const distanceToFooter = footerTop - windowHeight;

        // Check if scrolled over the footer
        if (distanceToFooter <= 0) {
            console.log('Scrolled over the footer');
            main.style.backgroundImage = 'none';
        } else if (scrollPercentage >= 15) { // Apply custom background image properties if scrolled past 15%
            console.log('Applying custom background image properties');
            main.style.backgroundImage = 'url("b71f31fb-5156-452c-871c-94bed775d424-removebg-preview (1).png")';
            main.style.backgroundRepeat = 'no-repeat';
            main.style.backgroundPosition = '50% 50%';
            main.style.backgroundSize = '30% 60%';
        } else { // Revert to original background image properties
            console.log('Reverting to original background image properties');
            main.style.backgroundImage = 'url("b71f31fb-5156-452c-871c-94bed775d424-removebg-preview (1).png")';
            main.style.backgroundRepeat = '';
            main.style.backgroundColor = '';
            main.style.backgroundPosition = '';
            main.style.backgroundSize = '';
            main.style.opacity = '1';
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Add event listener to search button
    document.getElementById("search-button").addEventListener("click", function () {
        // Display loader
        document.getElementById("loader").style.display = "block";
        
        // Simulate asynchronous data fetching
        setTimeout(function () {
            // Hide loader after a delay (simulating data fetching)
            document.getElementById("loader").style.display = "none";

            let bookData = [
                "123,The Great Gatsby,F. Scott Fitzgerald,Available",
                "456,To Kill a Mockingbird,Harper Lee,Unavailable",
                // Add more book data as needed
            ];

            // Call the displayResult function with the book data
            document.getElementById("table-header").style.display = "";
        }, 2000);
    });
    var dropdown = document.getElementById('s1');

// Function to make dropdown clickable
function makeDropdownClickable() {
    dropdown.removeAttribute('disabled'); // Remove the 'disabled' attribute
}

// Call the function to make dropdown clickable
makeDropdownClickable();

});
