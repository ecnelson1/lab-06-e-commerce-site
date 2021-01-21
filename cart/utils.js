
export function findById(id, cart) {
    for (let lineItem of cart) {
        if (lineItem.id === id){
            return lineItem;
        }
    }}

export function calcItemTotal(cart, book){
    const amount = cart.quantity * book.price;
    return amount;
}