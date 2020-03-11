const isSlider = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

isSlider.value = '14';
text.style.fontSize = `${isSlider.value}px`;

const changeFontSize = () => text.style.fontSize = `${isSlider.value}px`;

isSlider.addEventListener('input', changeFontSize);