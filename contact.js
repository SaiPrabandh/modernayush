document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // You can add form validation and submission logic here
        // For example, sending the form data to a server
        // After processing, you can display a success message or handle errors
    });
});
