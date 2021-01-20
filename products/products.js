import { books } from '../products/books.js';
import { renderBook } from '../products/renderBook.js';


const listedBooks = document.getElementById('book-list');
for (const book of books){
    const newBook = renderBook(book);
    listedBooks.appendChild(newBook);
}