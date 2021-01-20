// IMPORT MODULES under test here:
import { renderBook } from '../products/renderBook.js';
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
