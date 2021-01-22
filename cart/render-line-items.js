// import { calcItemTotal } from '../utils.js';

export function renderLineItem(cartItem, bookItem){
    const quantity = cartItem.quantity;
    const tRow = document.createElement('tr');
    
    const itemName = document.createElement('td');
    const itemQuantity = document.createElement('td');
    const itemPrice = document.createElement('td');
    
    itemName.textContent = bookItem.name;
    itemQuantity.textContent = quantity;
    const priceTotal = calcItemTotal(cartItem.quantity, bookItem.price);
    itemPrice.textContent = `$${priceTotal.toFixed(2)}`;
    
    tRow.append(itemName, itemQuantity, itemPrice);
    return tRow; 
}
export function calcItemTotal(cartItem, bookItem){
    return cartItem.quantity * bookItem.price;
}