const Library = require("../models/library.model");

// Add Book
const addBook = async (req, res) => {
  try {
    const book = new Library({ ...req.body, status: "available" });
    await book.save();
    res.status(201).json({ message: "Book added successfully", book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Borrow Book
const borrowBook = async (req, res) => {
  try {
    const book = await Library.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.status !== "available")
      return res.status(409).json({ message: "Book is not available for borrowing" });

    const borrowDate = new Date();
    const dueDate = new Date(borrowDate);
    dueDate.setDate(dueDate.getDate() + 14);

    book.status = "borrowed";
    book.borrowerName = req.body.borrowerName;
    book.borrowDate = borrowDate;
    book.dueDate = dueDate;

    await book.save();
    res.status(200).json({ message: "Book borrowed successfully", book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Return Book
const returnBook = async (req, res) => {
  try {
    const book = await Library.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.status !== "borrowed")
      return res.status(409).json({ message: "Book is not currently borrowed" });

    const today = new Date();
    let overdueFees = 0;

    if (today > book.dueDate) {
      const diffTime = Math.abs(today - book.dueDate);
      const overdueDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      overdueFees = overdueDays * 10; // Rs.10/day
    }

    book.status = "available";
    book.returnDate = today;
    book.overdueFees = overdueFees;
    book.borrowerName = undefined;
    book.borrowDate = undefined;
    book.dueDate = undefined;

    await book.save();
    res.status(200).json({ message: "Book returned", book });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Books
const getBooks = async (req, res) => {
  try {
    const filter = {};
    if (req.query.status) filter.status = req.query.status.toLowerCase();
    if (req.query.title) filter.title = new RegExp(req.query.title, "i");

    const books = await Library.find(filter);
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete Book
const deleteBook = async (req, res) => {
  try {
    const book = await Library.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });

    if (book.status === "borrowed")
      return res.status(409).json({ message: "Cannot delete a borrowed book" });

    await book.deleteOne();
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  addBook,
  borrowBook,
  returnBook,
  getBooks,
  deleteBook,
};
