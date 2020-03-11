const allCategoryItem = document.querySelector('#categories');
console.log(`В списке ${allCategoryItem.children.length} категории`);
const titleOfList = Array.from(document.querySelectorAll('.item'));
titleOfList.map(item => console.log(`В категории "${item.children[0].innerText}" находится ${item.children[1].children.length} элементов`));