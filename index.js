
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById('video');
    const button = document.getElementById('b'); // Get the button element
    const form2 = document.getElementById('f2'); // Get the form2 element

    // Function to handle button click
    button.addEventListener("click", function () {
        button.style.display = 'none'; // Hide the button
        form2.style.display = 'block'; // Show the form2
        video.play(); // Start playing the video
    });
    
});
