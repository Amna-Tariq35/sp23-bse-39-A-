document.addEventListener("DOMContentLoaded", function() {
    const profilePicDiv = document.getElementById('profile');
    const introBox = document.getElementById('intro-box');

    profilePicDiv.addEventListener('mouseover', function() {
        introBox.style.display = 'block';
    });

    profilePicDiv.addEventListener('mouseout', function() {
        introBox.style.display = 'none';
    });
});