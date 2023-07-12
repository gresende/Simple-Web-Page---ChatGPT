document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const confirmButton = document.getElementById('confirmButton');
  
    emailInput.addEventListener('input', function() {
      const email = emailInput.value;
      const isValidEmail = validateEmail(email);
  
      if (isValidEmail) {
        emailInput.classList.remove('error');
        document.getElementById('emailError').textContent = '';
        confirmButton.disabled = false;
      } else {
        emailInput.classList.add('error');
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        confirmButton.disabled = true;
      }
    });
  
    document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Simulate email sending
      const recoveryEmail = emailInput.value;
      showToast(`Recovery email sent to ${recoveryEmail}`);
      emailInput.value = '';
      confirmButton.disabled = true;
    });
  
    function showToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = message;
      document.body.appendChild(toast);
  
      setTimeout(function() {
        toast.remove();
      }, 3000);
    }
  
    function validateEmail(email) {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  