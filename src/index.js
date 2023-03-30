const bodyParser = require("body-parser");
const express = require("express");
const feedsRouter = require("./routes/feeds/feedsRoutes")
const tagsRouter = require("./routes/tags/tagsRoutes")
const categoriesRouter = require("./routes/categories/categoriesRoutes")
const reviewsRouter = require("./routes/reviews/reviewsRoutes")
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use('/api/feeds', feedsRouter);
app.use('/api/tags', tagsRouter);
app.use('/api/categories', categoriesRouter);
app.use('/api/reviews', reviewsRouter);

app.listen(PORT, () => {
    console.log(`Cravey is listening on port ${PORT}`);
});

nodule.exports = app;