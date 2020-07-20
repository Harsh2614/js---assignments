//Copy New Elements To ShoppingBasket Array Without Changing ShoppingList Array

const shoppingList = ['Maggi','Pasta','Cheese','Eggs','Meet','Chocolate','Waffles','Butter'];
const shoppingBasket = [...shoppingList];
shoppingBasket.push('SoftDrinks','TomatoSauce','Fruits','Yogurt','Biscuits');

console.log(shoppingList);
console.log(shoppingBasket);
