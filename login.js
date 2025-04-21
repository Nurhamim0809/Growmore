document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const loginButton = document.querySelector('.login-btn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Handle login button click
    loginButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent form submission

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (email === '' || password === '') {
            alert('Please fill in both fields.');
            return;
        }

        // Check if the email is valid
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate login process
        // Normally, you would send a request to your back-end here to verify the credentials

        if (email === "hamim65@gmail.com" && password === "1234") {
            // Simulating successful login
            alert('Login successful!');
            window.location.href = './index.html'; // Redirect to home page
        } else {
            alert('Incorrect email or password.');
        }
    });

    // Optional: Handle "forgot password" link
    const forgotPasswordLink = document.querySelector('.forgot-password a');
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Password recovery feature is not implemented yet.');
    });
});