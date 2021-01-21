import { cart } from '../cart/cart-data.js';
import { books } from '../books.js'; 
import { renderLineItem } from '../cart/render-line-items.js';
import { findById, calcOrderTotal } from '../cart/utils.js';

const displayCart = document.getElementById('cart-display');
const displayTotal = document.getElementById('total-display');
for (let orderItems of cart){
    const purchasedItem = findById(orderItems.id, books);
    const purchaseLine = renderLineItem(orderItems, purchasedItem);
    displayCart.append(purchaseLine);   
} 
const orderTotal = calcOrderTotal(cart, books);
displayTotal.append(`Your Order Total is $${orderTotal}`);