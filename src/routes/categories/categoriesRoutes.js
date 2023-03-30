const express = require("express");

const categoriesController = require("../../controllers/categoriesController");
const router = express.Router();

router.get('/list', categoriesController.list);

module.exports = router;
