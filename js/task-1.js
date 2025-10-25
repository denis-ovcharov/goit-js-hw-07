
// Додаю клас .item-title до всіх h2 
const h2Titles = document.querySelectorAll('h2');
for (const h2 of h2Titles) {
    h2.classList.add('item-title')
    const titles = document.querySelectorAll('.item-title');
};

// Додаю клас .item-list до всіх ul всередині #catecories
const categoriesLists = document.querySelectorAll('#categories ul');
for (const list of categoriesLists) {
    list.classList.add('item-list');
    
}

const items = document.querySelectorAll('.item');
console.log('Number of categories: ', items.length);
items.forEach((item) => {
    const title = item.querySelector('.item-title');
    const elements = item.querySelector('.item-list');
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elements.children.length}`);
});











    
    






