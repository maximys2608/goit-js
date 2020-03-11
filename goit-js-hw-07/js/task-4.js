let counterValue = 0;

const incButton = document.querySelector('[data-action="decrement"]');
const decButton = document.querySelector('[data-action="increment"]');
const counter = document.getElementById('value');

const increment = () => {
    counterValue -= 1;
    return counter.textContent = counterValue;
}

const decrement = () => {
    counterValue += 1;
    return counter.textContent = counterValue;
}

incButton.addEventListener('click', increment);
decButton.addEventListener('click', decrement);