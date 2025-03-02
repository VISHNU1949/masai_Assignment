const Book = require("./books");
const { Member, PremiumMember } = require("./members");

const book1 = new Book("The Hobbit", "J.R.R. Tolkien");
const book2 = new Book("Harry Potter", "J.K. Rowling");
const book3 = new Book("1984", "George Orwell");
const book4 = new Book("The Catcher in the Rye", "J.D. Salinger");

const regularMember = new Member("Alice");
const premiumMember = new PremiumMember("Bob");

// Borrowing books
regularMember.borrowBook(book1); 
regularMember.borrowBook(book2); 
regularMember.borrowBook(book3);
regularMember.borrowBook(book4); 

premiumMember.borrowBook(book4); 
premiumMember.borrowBook(book1); 

const borrowForBob = premiumMember.borrowBook.bind(premiumMember, book3);
borrowForBob(); 

console.log(regularMember);
console.log(premiumMember);
