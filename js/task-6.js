// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', (event) => {
    const inputLength = Number(inputRef.getAttribute('data-length'));
    event.target.value.length !== inputLength ?
        inputRef.classList.add('invalid') || inputRef.classList.replace('valid', 'invalid') :
        inputRef.classList.add('valid') || inputRef.classList.replace('invalid', 'valid');
});
