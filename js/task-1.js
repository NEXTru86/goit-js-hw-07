// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const allCategoriesRef = document.querySelector('#categories');
console.log('В списке ', allCategoriesRef.children.length, ' категории.');

const categoriesRef = document.querySelectorAll('.item');

categoriesRef.forEach(category => {
    console.log('Категория: ', category.firstElementChild.innerText);
    const elementRef = category.querySelectorAll('.item > ul > li');
    console.log('Количество элементов: ', elementRef.length);
})
    