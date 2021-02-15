// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM - узлов используй document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const createList = item => {
    const itemRef = document.createElement('li');
    itemRef.textContent = item;
    return itemRef;
}

const listIngredients = ingredients.map(item => createList(item));

// ingredients.forEach(item => {
//     console.log(createList(item));
// })

const listRootRef = document.querySelector('#ingredients');
listRootRef.append(...listIngredients);