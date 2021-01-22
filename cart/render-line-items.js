
export function renderLineItem(cartItem, book){
    const quantity = cartItem.quantity;
    const tRow = document.createElement('tr');
    
    const itemName = document.createElement('td');
    const itemQuantity = document.createElement('td');
    const itemPrice = document.createElement('td');
    
    itemName.textContent = book.name;
    itemQuantity.textContent = quantity;
    console.log(cartItem, book);
    const priceTotal = calcItemTotal(cartItem, book);
    itemPrice.textContent = `$${priceTotal.toFixed(2)}`;
    
    tRow.append(itemName, itemQuantity, itemPrice);
    return tRow; 
}
export function calcItemTotal(cartItem, book){
    return cartItem.quantity * book.price;
}