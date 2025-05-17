const express = require("express");
const router = express.Router();
const {
  addBook,
  borrowBook,
  returnBook,
  getBooks,
  deleteBook,
} = require("../controllers/library.controller");

const {
  validateBook,
  checkBorrowLimit,
} = require("../middleware/library.middleware");

// Routes
router.post("/library/books", validateBook, addBook);
router.patch("/library/borrow/:id", checkBorrowLimit, borrowBook);
router.patch("/library/return/:id", returnBook);
router.get("/library/books", getBooks);
router.delete("/library/books/:id", deleteBook);

module.exports = router;
