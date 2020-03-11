const inputForm = document.querySelector('#validation-input');
const inputLength = Number(inputForm.getAttribute('data-length'));
const classExist = inputForm.classList;

const changeColor = () => { inputForm.value.length >= inputLength ? inputForm.classList.add('valid') 
    : inputForm.classList.add('invalid')
};

const removeColor = () => { 
    if (classExist.value !== '')  {
        inputForm.classList.remove(classExist.value);
    }
};

inputForm.addEventListener('blur', changeColor);
inputForm.addEventListener('focus', removeColor);