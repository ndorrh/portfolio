const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const message = document.getElementById('message');
const nameField = document.getElementById('name');
const errorMail = document.getElementById('error-mail');

const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('input', () => {
  const isValid = email.value.length !== 0 && emailRegExp.test(email.value)
  && email.value === email.value.toLowerCase();

  if (isValid) {
    errorMail.textContent = '';
  } else {
    errorMail.textContent = 'Email cannot contain capital letters';
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length !== 0 && emailRegExp.test(email.value)
        && email.value === email.value.toLowerCase() && nameField.value.length < 30
      && nameField.value.length !== 0 && message.value !== '';
  if (!isValid) {
    error.textContent = 'All input fields must be filled';
  } else {
    error.textContent = '';
    form.submit();
  }
});