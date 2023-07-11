document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const showPasswordCheckbox = document.getElementById('showPassword');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Perform email validation here
    if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      return;
    }

    // Perform password validation here
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      return;
    }

    // Proceed to the next page (Products List page) if validations pass
    window.location.href = 'products-list.html';
  });

  showPasswordCheckbox.addEventListener('change', function() {
    passwordInput.type = this.checked ? 'text' : 'password';
  });

  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
