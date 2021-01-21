// IMPORT MODULES under test here:
import { renderBook } from '../products/renderBook.js';
import { findById, calcItemTotal } from '../cart/utils.js';
import { books } from '../books.js'; 

// import { example } from '../example.js';

const test = QUnit.test;

test('renders a book posting', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const templeGrand = {
        id: 'Temple Grandin: How the Girl Who Loved Cows Embraced Autism and Changed the World by Sy Montgomery',
        name: 'Temple Grandin: How the Girl Who Loved Cows Embraced Autism and Changed the World',
        image: '../assets/templeGran.png',
        description: 'When Temple Grandin was born, her parents knew she was different. Years later she was diagnosed with autism. Temple’s doctor recommended institutionalizing her, but her mother believed in her. Temple went to school instead. Today, Dr. Temple Grandin, a scientist and professor of animal science at Colorado State University, is an autism advocate and her world-changing career revolutionized the livestock industry. This compelling biography and Temples personal photos take us inside her extraordinary mind and open the door to a broader understanding of autism.',
        category: 'Biographical-Farming',
        price: 16.95 };

    const expected = '<li><img src="../assets/templeGran.png" alt=""><h3 class="title">Temple Grandin: How the Girl Who Loved Cows Embraced Autism and Changed the World by Sy Montgomery</h3><p class="description">When Temple Grandin was born, her parents knew she was different. Years later she was diagnosed with autism. Temple’s doctor recommended institutionalizing her, but her mother believed in her. Temple went to school instead. Today, Dr. Temple Grandin, a scientist and professor of animal science at Colorado State University, is an autism advocate and her world-changing career revolutionized the livestock industry. This compelling biography and Temples personal photos take us inside her extraordinary mind and open the door to a broader understanding of autism.,category: Biographical-Farming </p><p class="price">Price: 16.95<button>Add</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBook(templeGrand).outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('findById returns The Midnight Library by Matt Haig  when given a 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem1 = {
        id: 1,
        name: 'The Midnight Library by Matt Haig',
        image: '../assets/midLib.png',
        description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices . . . Would you have done anything different, if you had the chance to undo your regrets?',
        category: 'feel-good',
        price: 17.00
    };

    const expected = cartItem1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, books);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('calcItemTotal returns the value of quantity * price when given quantity and price of an item', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const quantity = 3;
    const price = 16.50;
    const expected = 49.50;
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(quantity, price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
