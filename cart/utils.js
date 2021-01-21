
export function findById(id, cart) {
    for (let lineItem of cart) {
        if (lineItem.id === id){
            return lineItem;
        }
    }}

export function calcItemTotal(quantity, price){
    const amount = quantity * price;
    return Math.round((amount + Number.EPSILON) * 100) / 100;
}