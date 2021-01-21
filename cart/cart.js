import { cart } from '../cart/cart-data.js';
import { books } from '../books.js'; 
import { renderLineItem } from '../cart/render-line-items.js';
import { findById, calcItemTotal } from '../cart/utils.js';

const displayCart = document.getElementById('cart-display');

for (let orderItems of cart){
    const purchasedItem = findById(orderItems.id, books);
    const purchaseLine = renderLineItem(orderItems, purchasedItem);
    displayCart.append(purchaseLine);
}
