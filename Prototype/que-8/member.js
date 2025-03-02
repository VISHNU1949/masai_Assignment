const Book = require("./books");

function Member(name) {
    this.name = name;
    this.borrowedBooks = [];
}

Member.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 3) {
        console.log(`${this.name} cannot borrow more than 3 books.`);
        return;
    }

    if (!book.isAvailable) {
        console.log(`Sorry, "${book.title}" is already borrowed.`);
        return;
    }

    book.isAvailable = false;
    this.borrowedBooks.push(book.title);
    console.log(`${this.name} borrowed "${book.title}".`);
};

function PremiumMember(name) {
    Member.call(this, name);
    this.specialCollectionAccess = true;
}

PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

PremiumMember.prototype.borrowBook = function (book) {
    if (this.borrowedBooks.length >= 5) {
        console.log(`${this.name} cannot borrow more than 5 books.`);
        return;
    }

    Member.prototype.borrowBook.call(this, book);
};

module.exports = { Member, PremiumMember };
