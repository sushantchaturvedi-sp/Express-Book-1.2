const books = require("../booksdb");

//1: Get all books
exports.getAllBooks = (req, res,) => {
    const {author, title} = req.query;
    let filteredBooks = Object.values(books);

    if (author) {
        filteredBooks = filteredBooks.filter(book => book.author === author);
    }

    if (title) {
        filteredBooks = filteredBooks.filter(book => book.title === title);
    }
    res.status(200).json(filteredBooks);
};


//2: Get book by ID
exports.getBookById = (req, res) => {
    const book = books[req.params.id];
    res.status(200).json(book);
};



// 5: Get book Review
exports.getBookReview = (req, res) => {
    const book = books[req.params.id];
    res.status(200).json(book.reviews);
};