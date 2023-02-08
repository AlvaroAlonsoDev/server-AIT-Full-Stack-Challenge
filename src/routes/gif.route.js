const express = require("express");
const router = express.Router();

const GifController = require("../controllers/gif.controller");

// Petition
router.get("/get", GifController.getAll)
router.post("/new", GifController.newGif)

module.exports = router;