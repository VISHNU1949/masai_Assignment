const Library = require("../models/library.model");

// Validate required fields when adding a book
const validateBook = (req, res, next) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Incomplete Data" });
  }
  next();
};

// Check if user already has borrowed 3 books
const checkBorrowLimit = async (req, res, next) => {
  const { borrowerName } = req.body;

  const count = await Library.countDocuments({
    borrowerName,
    status: "borrowed"
  });

  if (count >= 3) {
    return res.status(409).json({ message: "Borrowing limit exceeded (max 3 books)" });
  }

  next();
};

module.exports = {
  validateBook,
  checkBorrowLimit,
};
