
import { books } from '../books.js'; 
import { renderLineItem } from '../cart/render-line-items.js';
import { getCart } from '../cart/utils.js';
import { findById, calcOrderTotal } from '../utils.js';

const displayCart = document.getElementById('cart-display');
const displayTotal = document.getElementById('total-display');
const cart = getCart();
let total = 0;
for (let orderItems of cart){
    const purchasedItem = findById(orderItems.id, books);
    const orderTotal = calcOrderTotal(cart, books);
    total = total + orderTotal;
    const purchaseLine = renderLineItem(orderItems, purchasedItem);
    displayCart.append(purchaseLine);   
} 
const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3);

displayCart.append(tr);


const button = document.querySelector('button');

button.addEventListener('click', () => {
    const cart = getCart();

    alert(JSON.stringify(cart, true, 2));

});


displayTotal.append(`Your Order Total is $${orderTotal}`);
