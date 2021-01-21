
export function findById(id, cart) {
    for (let lineItem of cart) {
        if (lineItem.id === id){
            return lineItem;
        }
    }}

export function calcItemTotal(cart, book){
    return cart * book;
}
export function calcOrderTotal(cart, books){
    let orderTotal = 0;
    for (let orderQuantity of cart){
        let orderItems = findById(orderQuantity.id, books);
        let lineTotal = calcItemTotal(orderQuantity.quantity, orderItems.price);
        orderTotal = orderTotal + lineTotal;
    }
    return orderTotal.toFixed(2);
}
