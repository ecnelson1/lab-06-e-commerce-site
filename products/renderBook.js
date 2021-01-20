export function renderBook(book) {
    const bookli = document.createElement('li');

    const img = document.createElement('img');
    img.src = book.image;
    img.alt = '';
    bookli.append(img);

    const h3 = document.createElement('h3');
    h3.classList.add('title');
    h3.textContent = book.id;
    bookli.append(h3);
    
    const pDesc = document.createElement('p');
    pDesc.classList.add('description');
    pDesc.textContent = book.description + ',category: ' + book.category + ' ';
    bookli.append(pDesc);

    const pPrice = document.createElement('p');
    pPrice.classList.add('price');
    pPrice.textContent = 'Price: ' + book.price;
    const button = document.createElement('button');
    button.textContent = 'Add';
    pPrice.appendChild(button);
    bookli.append(pPrice);
    
    return bookli;
}

