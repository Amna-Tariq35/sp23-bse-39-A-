document.addEventListener("DOMContentLoaded", function() {
    const profilePicDiv = document.getElementById('profile');
    const introBox = document.getElementById('intro-box');

    // Show the intro box when hovering over the profile picture
    profilePicDiv.addEventListener('mouseover', function() {
        introBox.style.display = 'block';
    });

    // Hide the intro box when the mouse leaves the profile picture
    profilePicDiv.addEventListener('mouseout', function() {
        introBox.style.display = 'none';
    });
});