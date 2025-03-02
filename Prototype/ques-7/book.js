function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`
}
const books = [
  new Book("The Hobbit", "J.R.R. Tolkien", 1937),
  new Book("1984", "George Orwell", 1949),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
]
export { books }
