import { addToCart } from '../cart/utils.js';

export function renderBook(book) {
    
    const bookli = document.createElement('li');

    const img = document.createElement('img');
    img.src = book.image;
    img.alt = '';
    bookli.append(img);

    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.textContent = book.name;
    bookli.append(h3);
    
    const pDesc = document.createElement('p');
    pDesc.classList.add('description');
    pDesc.textContent = book.description + ',category: ' + book.category + ' ';
    bookli.append(pDesc);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = 'Price: $' + book.price;
    bookli.append(pPrice);

    const button = document.createElement('button');
    button.addEventListener('click', () => {
        addToCart(book.id);
    });
    button.textContent = 'Add To Cart';
    bookli.append(button);

    return bookli;
}

