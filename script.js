// JavaScript code for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get form data
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Generate mailto link with form data
  var mailtoLink = "mailto:deigant1998@gmail.com?subject=New Message&body=Name: " + name + "%0D%0AEmail: " + email + "%0D%0AMessage: " + message;

  // Open mail client
  window.location.href = mailtoLink;
});