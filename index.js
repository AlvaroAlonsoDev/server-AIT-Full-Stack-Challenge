const { conection } = require("./database/conection");
const app = require("./src/server");
const dotenv = require("dotenv");

// Iniciar app
console.log("App de node arrancada");

// Config dotenv
dotenv.config();

// Conectar a la DB
conection();

// Crear servidor node
const puerto = 4000;




// Crear servidor y escuchar peticiones http
app.listen(4000, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
})