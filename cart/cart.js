import { books } from '../books.js'; 
import { renderLineItem, calcItemTotal } from '../cart/render-line-items.js';
import { getCart } from '../cart/utils.js';
import { findById } from '../utils.js';


const displayCart = document.getElementById('cart-display');
const displayTotal = document.getElementById('total-display');
const cart = getCart();
let total = 0;
for (let orderItems of cart){
    const purchasedItem = findById(orderItems.id, books);
    console.log(orderItems, books);
    const itemTotal = calcItemTotal(orderItems, purchasedItem);
    total = total + itemTotal;

    const purchaseLine = renderLineItem(orderItems, purchasedItem);
    displayCart.append(purchaseLine);   
} 
const tr = document.createElement('tr');
const td1 = document.createElement('td');
const td2 = document.createElement('td');
const td3 = document.createElement('td');

td3.textContent = `Order total: $${total}`;

tr.append(td1, td2, td3);

displayTotal.append(tr);


// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     const cart = getCart();

//     alert(JSON.stringify(cart, true, 2));

// });
