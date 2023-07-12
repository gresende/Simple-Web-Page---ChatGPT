document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const viewPasswordIcon = document.getElementById('viewPasswordIcon');
  const forgotPasswordLink = document.querySelector('.forgot-password-link');



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

  emailInput.addEventListener('input', function() {
    const email = emailInput.value;
    const isValidEmail = validateEmail(email);

    if (isValidEmail) {
      emailInput.classList.remove('error');
      document.getElementById('emailError').textContent = '';
    } else {
      emailInput.classList.add('error');
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }
  });

  viewPasswordIcon.addEventListener('click', function() {
    const passwordType = passwordInput.getAttribute('type');
    if (passwordType === 'password') {
      passwordInput.setAttribute('type', 'text');
      viewPasswordIcon.classList.remove('fa-eye');
      viewPasswordIcon.classList.add('fa-eye-slash');
    } else {
      passwordInput.setAttribute('type', 'password');
      viewPasswordIcon.classList.remove('fa-eye-slash');
      viewPasswordIcon.classList.add('fa-eye');
    }
  });

  forgotPasswordLink.addEventListener('click', function(event) {
    event.preventDefault();
    // Add logic to navigate to the Forgot Password page
    window.location.href = 'forgot-password.html';
  });

  function validateEmail(email) {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});