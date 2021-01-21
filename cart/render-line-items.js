import { calcItemTotal } from './utils.js';

export function renderLineItem(cart, book){
    const itemQuantity = document.createElement('td');
    const quantity = cart.quantity;
    itemQuantity.textContent = quantity;

    const tr = document.createElement('tr');

    const itemName = document.createElement('td');
    itemName.textContent = book.name;

    const itemPrice = document.createElement('td');
    const priceTotal = calcItemTotal(cart.quantity, book.price);
    itemPrice.textContent = `$${priceTotal.toFixed(2)}`;
    console.log(priceTotal);
    
    tr.append(itemName, itemQuantity, itemPrice);
    return tr;
}