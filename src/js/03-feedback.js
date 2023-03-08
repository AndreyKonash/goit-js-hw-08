import _ from 'lodash';

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageInput: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener(
  'input',
  _.throttle(() => {
    const data = {
      email: refs.emailInput.value,
      message: refs.messageInput.value,
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500)
);

document.addEventListener('DOMContentLoaded', () => {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (data && refs.emailInput && refs.messageInput) {
    refs.emailInput.value = data.email;
    refs.messageInput.value = data.message;
  }
});

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  const data = {
    email: refs.emailInput.value,
    message: refs.messageInput.value,
  };

  localStorage.removeItem('feedback-form-state');
  refs.emailInput.value = '';
  refs.messageInput.value = '';

  console.log(data);
});
