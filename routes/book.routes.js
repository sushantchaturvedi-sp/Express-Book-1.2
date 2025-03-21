const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book.controller");

//1: Get all books
router.get("/", bookController.getAllBooks); //Use Booksdb to use an objects and return it as array.

//2: Get book by ID
router.get("/:id", bookController.getBookById);

// 3: Get books by Author
router.get("/author/:author", bookController.getBooksByAuthor);

// 4: Get books by Title
router.get("/title/:title", bookController.getBooksByTitle);

//5: Get books Review
router.get("/:id/reviews", bookController.getBookReview);


module.exports = router;
