const express = require('express');
const router = express.Router();
const bookController = require('../controller/bookController');

router.get('/books', bookController.getBooks);

module.exports = router;
