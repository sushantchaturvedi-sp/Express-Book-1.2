const express = require("express");


const app = express();
const PORT = 3040;

app.use(express.json()); //will parse firstly

// Book and Author Routes

const bookRoutes = require("./routes/book.routes");
app.use("/books", bookRoutes);
app.use((req, res, next) => { res.status(404).send('Sorry, that route does not exist.'); });
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
