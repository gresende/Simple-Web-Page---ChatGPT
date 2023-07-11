document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');
  
  var email = emailInput.value;
  var password = passwordInput.value;
  
  if (!validateEmail(email)) {
    // Display an error message for invalid email format
    emailInput.classList.add('error');
    return;
  }
  
  // Perform login logic here
  
  // Clear error message if previously shown
  emailInput.classList.remove('error');
});

function validateEmail(email) {
  // Regular expression to validate email format
  var emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}
