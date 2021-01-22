
import { renderBook } from '../products/renderBook.js';
import { findById } from '../utils.js';
import { books } from '../books.js'; 
import { renderLineItem, calcItemTotal } from '../cart/render-line-items.js';
import { cart } from '../cart/cart-data.js';


const test = QUnit.test;

test('renders a book posting', (expect) => {
    const templeGrand = {
        id: 'Temple Grandin: How the Girl Who Loved Cows Embraced Autism and Changed the World by Sy Montgomery',
        name: 'Temple Grandin: How the Girl Who Loved Cows Embraced Autism and Changed the World',
        image: '../assets/templeGran.png',
        description: 'When Temple Grandin was born, her parents knew she was different. Years later she was diagnosed with autism. Temple’s doctor recommended institutionalizing her, but her mother believed in her. Temple went to school instead. Today, Dr. Temple Grandin, a scientist and professor of animal science at Colorado State University, is an autism advocate and her world-changing career revolutionized the livestock industry. This compelling biography and Temples personal photos take us inside her extraordinary mind and open the door to a broader understanding of autism.',
        category: 'Biographical-Farming',
        price: 16.95 };

    const expected = '<li><img src="../assets/templeGran.png" alt=""><h3 class="title">Temple Grandin: How the Girl Who Loved Cows Embraced Autism and Changed the World</h3><p class="description">When Temple Grandin was born, her parents knew she was different. Years later she was diagnosed with autism. Temple’s doctor recommended institutionalizing her, but her mother believed in her. Temple went to school instead. Today, Dr. Temple Grandin, a scientist and professor of animal science at Colorado State University, is an autism advocate and her world-changing career revolutionized the livestock industry. This compelling biography and Temples personal photos take us inside her extraordinary mind and open the door to a broader understanding of autism.,category: Biographical-Farming </p><p class="price">Price: 16.95</p><button>Add To Cart</button></li>';
    
    const actual = renderBook(templeGrand).outerHTML;
    expect.equal(actual, expected);
});

test('findById returns The Midnight Library by Matt Haig  when given a 1 and the books array', (expect) => {
    const cartItem1 = {
        id: 1,
        name: 'The Midnight Library by Matt Haig',
        image: '../assets/midLib.png',
        description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets?',
        category: 'feel-good',
        price: 17.00
    };

    const expected = cartItem1;
    const actual = findById(1, books);
    expect.deepEqual(actual, expected);
});
test('calcItemTotal returns the value of quantity * price when given quantity and price of an item', (expect) => {
    const cart = {
        quantity : 3
    };
    const midnightLib = {
        id: 1,
        name: 'The Midnight Library by Matt Haig',
        image: '../assets/midLib.png',
        description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets?',
        category: 'feel-good',
        price: 17.00
    };
    const expected = 51;
    const actual = calcItemTotal(cart, midnightLib);
    expect.equal(actual, expected);
});
test('renderLineItem should take in an item from the cart and its corresponding product from inventory and return a table row with the name, quantity, and price', (expect) => {
  
    const expected = '<tr><td>The Midnight Library by Matt Haig</td><td>1</td><td>$17.00</td></tr>';
    const orderLine = renderLineItem(cart[0], books[0]);
    const actual = orderLine.outerHTML;
    expect.equal(actual, expected);
});
