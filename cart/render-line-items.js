import { calcItemTotal } from './utils.js';

export function renderLineItem(cartItem, book){
    const quantity = cartItem.quantity;
    const tr = document.createElement('tr');
    const itemName = document.createElement('td');
    const itemPrice = document.createElement('td');
    const itemQuantity = document.createElement('td');
    itemName.textContent = book.name;
    itemPrice.textContent = `$${calcItemTotal(cartItem, book)}`;
    itemQuantity.textContent = quantity;
    tr.append(itemName, itemQuantity, itemPrice);
    return tr;
}