const express = require("express");

const tagsController = require("../../controllers/tagsController");
const router = express.Router();

router.get('/list', tagsController.list);

module.exports = router;
