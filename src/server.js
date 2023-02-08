const cors = require("cors");
const express = require("express");

// importar Vistas(routes)
const userRoutes = require("./routes/user.route");
const gifRoutes = require("./routes/gif.route");


// Crear servidor node
const app = express();

// Config cors
app.use(cors());

// Convertir body a obj js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load all ROUTES
app.use("/api/user", userRoutes)
app.use("/api/gif", gifRoutes)


module.exports = app;