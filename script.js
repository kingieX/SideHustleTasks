const form = document.querySelector('#my-form');
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
  });
const successMessage = document.querySelector('#success-message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // handle form submission here

  // display success message
  successMessage.style.display = 'block';
  setTimeout(function() {
    location.reload();
  }, 2000); // 2 seconds
});