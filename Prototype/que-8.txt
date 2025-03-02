function Book(title,author){
    this.title = title
    this.author = author
    this.isAvailable = true
}
function Member(name){
    this.name = name
    this.borrowedBooks=[]
}
Member.prototype.borrowBook=function(book){
    if(this.borrowedBooks.length>=3){
        console.log(`${this.name} has reached the borrowing limit (3 books).`)
        return
    }
    if (!book.isAvailable){
        console.log(`Sorry, "${book.title}" is already borrowed.`)
        return
    }
    book.isAvailable = false
    this.borrowedBooks.push(book.title)
    console.log(`${this.name} borrowed "${book.title}".`)
}
function PremiumMember(name){
    Member.call(this, name)
    this.specialCollectionAccess = true
}
PremiumMember.prototype = Object.create(Member.prototype)
PremiumMember.prototype.constructor = PremiumMember
PremiumMember.prototype.borrowBook=function(book){
    if (this.borrowedBooks.length>=5){
        console.log(`${this.name} has reached the borrowing limit (5 books).`)
        return
    }
    Member.prototype.borrowBook.call(this, book)
}
const book1 = new Book("The Hobbit", "J.R.R. Tolkien")
const book2 = new Book("1984", "George Orwell")
const book3 = new Book("The Catcher in the Rye", "J.D. Salinger")
const book4 = new Book("To Kill a Mockingbird", "Harper Lee")
const member1 = new Member("Alice")
const premiumMember1 = new PremiumMember("Bob")
member1.borrowBook(book1)
member1.borrowBook(book2)
member1.borrowBook(book3)
member1.borrowBook(book4)
premiumMember1.borrowBook(book1)
premiumMember1.borrowBook(book2)
premiumMember1.borrowBook(book3)
premiumMember1.borrowBook(book4)
const borrowForAlice = member1.borrowBook.bind(member1)
borrowForAlice(book4)
console.log("\n📜 Final Borrowed Books:")
console.log(`Alice's Books: ${member1.borrowedBooks}`)
console.log(`Bob's Books: ${premiumMember1.borrowedBooks}`)
