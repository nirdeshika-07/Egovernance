document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    // Ensure the form element is correctly selected
    if (!loginForm) {
        console.error('loginForm element not found!');
        return;
    }

    // Sample login credentials (mock data)
    const sampleUsername = 'TestUser';
    const samplePassword = 'test123';

    // Prefill the form with sample credentials
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');

    if (!usernameField || !passwordField) {
        console.error('Username or Password input element not found!');
        return;
    }

    usernameField.value = sampleUsername;
    passwordField.value = samplePassword;

    // Submit the form manually (no automatic submission)
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const formData = new FormData(loginForm);
        const enteredUsername = formData.get('username');
        const enteredPassword = formData.get('password');

        // Simulate server-side login check
        if (enteredUsername === sampleUsername && enteredPassword === samplePassword) {
            // Simulated successful login
            alert('Login successful!');
            // Redirect to dashboard or another page
            window.location.href = 'first.html';
        } else {
            // Simulated login failure
            alert('Login failed. Please check your username and password.');
        }
    });
});
