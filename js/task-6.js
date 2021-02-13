const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('change', (event) => {
    const inputLength = Number(inputRef.getAttribute('data-length'));
    event.target.value.length !== inputLength ?
        inputRef.classList.add('invalid') || inputRef.classList.replace('valid', 'invalid') :
        inputRef.classList.add('valid') || inputRef.classList.replace('invalid', 'valid');
});
