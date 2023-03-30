const express = require("express");

const feedsController = require("../../controllers/feedsController");
const router = express.Router();

router.get('/auto-complete', feedsController.autoComplete);

router.get('/search', feedsController.search);

router.get('/list', feedsController.list);

router.get('/listSimilarities', feedsController.listSimilarities)

module.exports = router;