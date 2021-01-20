import { books } from '../books.js';
import { renderBook } from '../products/renderBook.js';

//empty div to send list data
const listedBooks = document.getElementById('book-list');
//loop through books array
for (const book of books){
    //for each book run the rnderBook function
    //returns DOM element called newBookElement
    const newBook = renderBook(book);
    //adds new DOM element to empty div
    listedBooks.append(newBook);
}