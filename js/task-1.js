const allCategoriesRef = document.querySelector('#categories');
console.log('В списке ', allCategoriesRef.children.length, ' категории.');

const categoriesRef = document.querySelectorAll('.item');

categoriesRef.forEach(category => {
    console.log('Категория: ', category.firstElementChild.innerText);
    const elementRef = category.querySelectorAll('.item > ul > li');
    console.log('Количество элементов: ', elementRef.length);
})
    