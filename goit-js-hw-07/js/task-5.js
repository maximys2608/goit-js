const inputForm = document.querySelector('input');
const spanString = document.querySelector('#name-output');

const changeSpan = () => inputForm.value !== '' ? spanString.textContent = inputForm.value : spanString.textContent = 'незнакомец';

inputForm.addEventListener('input', changeSpan);