const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

// Petition
router.get("/prueba", () => {
    console.log("hola");
})

module.exports = router;