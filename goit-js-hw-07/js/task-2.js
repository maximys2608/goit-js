const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const strToIns = () => ingredients.forEach(item => {
    const eachElement = document.createElement("li");
    eachElement.innerHTML = item;
    return document.getElementById('ingredients').appendChild(eachElement);
  });

strToIns(ingredients);