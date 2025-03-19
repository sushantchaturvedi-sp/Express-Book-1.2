const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes');

app.use('/', bookRoutes);

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
