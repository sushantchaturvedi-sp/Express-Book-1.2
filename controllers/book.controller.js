const books = require("../booksdb");

//1: Get all books
exports.getAllBooks = async (req, res) => {
    res.status(200).json(Object.values(books));
};

//2: Get book by ID
exports.getBookById = (req, res) => {
    const book = books[req.params.id];
    res.status(200).json(book);
};

//3: Get all books by author
exports.getBooksByAuthor = (req, res) => {
    const author = req.params.author.toLowerCase();
    const filteredBooks = Object.values(books).filter(book => book.author.toLowerCase().includes(author));
    res.status(200).json(filteredBooks);
};

//4: Get all books by title
exports.getBooksByTitle = (req, res) => {
    const title = req.params.title.toLowerCase();
    const filteredBooks = Object.values(books).filter(book => book.title.toLowerCase().includes(title));
    res.status(200).json(filteredBooks);
};

// 5: Get book Review
exports.getBookReview = (req, res) => {
    const book = books[req.params.id];
    res.status(200).json(book.reviews);
};