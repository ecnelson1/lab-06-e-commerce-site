
export function findById(id, cart) {
    for (let lineItem of cart) {
        if (lineItem.id === id){
            return lineItem;
        }
    }}