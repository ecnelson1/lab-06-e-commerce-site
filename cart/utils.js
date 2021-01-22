import { findById } from '../utils.js';

const emptyCart = [];
const CART = 'CART';

export function setCart(cart){
    const storageCart = JSON.stringify(cart);
    localStorage.setItem(CART, storageCart);
}

export function getCart(){
    const storageCart = localStorage.getItem(CART);
    if (storageCart) {
        const cartObjects = JSON.parse(storageCart);
        return cartObjects;
    } else {
        const storageCartDefault = JSON.stringify(emptyCart);
        localStorage.setItem(CART, storageCartDefault);
        return emptyCart;
    } 
}
export function addToCart(id){
    const cart = getCart();
    const selectedBook = findById(id, cart);

    if (selectedBook){
        selectedBook.quantity++;
    }
    else {
        const newBook = {
            id: id,
            quantity: 1
        };
        cart.push(newBook);
    }
    setCart(cart);
}
