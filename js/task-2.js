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