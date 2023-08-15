import throttle from 'lodash.throttle';
const elements = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input[name=email]'),
  message: document.querySelector('textarea[name=message]'),
  submit: document.querySelector('button[type=submit]'),
};

const throttle = require('lodash.throttle');
const objInfo = {};
const objData = JSON.parse(localStorage.getItem('feedback-form-state'));

// console.log(objData);
// console.log(objData.email);
// console.log(objData.message);

if (objData) {
  elements.email.value = objData.email ?? '';
  elements.message.value = objData.message ?? '';
}

elements.form.addEventListener('input', throttle(hendllerForm, 500));
elements.submit.addEventListener('click', hendllerSubmit);

function hendllerForm() {
  objInfo.email = elements.email.value;
  objInfo.message = elements.message.value;

  // console.log(objInfo);

  localStorage.setItem('feedback-form-state', JSON.stringify(objInfo));
}

function hendllerSubmit(event) {
  event.preventDefault();

  const info = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(info);

  localStorage.removeItem('feedback-form-state');
  elements.form.reset();
}
