const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const DATA_KEY = 'feedback-form-state';

form.addEventListener('submit', onSubmitHandler);
function onSubmitHandler(e) {
  console.log(JSON.parse(localStorage.getItem(DATA_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(DATA_KEY);
}

textarea.addEventListener('input', throttle(onInputHandler, 1000));
function onInputHandler(e) {
  const email = input.value;
  const message = e.target.value;
  localStorage.setItem(
    DATA_KEY,
    JSON.stringify({
      email,
      message,
    })
  );
}
showSavedData();
function showSavedData() {
  const savedMessage = JSON.parse(localStorage.getItem(DATA_KEY));

  if (savedMessage) {
    input.value = savedMessage.email;
    textarea.value = savedMessage.message;
  }
}
