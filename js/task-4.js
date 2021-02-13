let counterValue = 0;
const valueRef = document.querySelector('#value');
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');

decrementBtnRef.addEventListener('click', () => {
    valueRef.textContent = counterValue -= 1;
});

incrementBtnRef.addEventListener('click', () => {
     valueRef.textContent = counterValue += 1;
});