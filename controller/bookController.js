const books = require('../booksdb');

function getBooks(req, res) {
    const { author, title } = req.query;
    let filteredBooks = Object.values(books);

    if (author) {
        filteredBooks = filteredBooks.filter((book) => book.author === author);
    }

    if (title) {
        filteredBooks = filteredBooks.filter((book) => book.title === title);
    }

    return res.status(200).json({
        success: true,
        data: filteredBooks
    });
}

module.exports = { getBooks };
