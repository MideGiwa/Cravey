const express = require("express");

const reviewsController = require("../../controllers/reviewsController");
const router = express.Router();

router.get('/list', reviewsController.list);

module.exports = router;
 