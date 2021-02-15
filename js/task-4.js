// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

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