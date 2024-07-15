// Get the popup element
const popup = document.getElementById('popup-box');

// Function to display the popup
function showPopup() {
    popup.style.display = 'flex';
}

// Function to close the popup and redirect to login page
function closePopup() {
    popup.style.display = 'none';
    window.location.href = 'login.html'; // Replace 'login.html' with your actual login page URL
}

// Show the popup when the page loads (for demonstration purposes)
document.addEventListener('DOMContentLoaded', function() {
    showPopup();
});
