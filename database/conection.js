const mongoose = require("mongoose");

const conection = async () => {
    mongoose.set('strictQuery', true)
    try {
        await mongoose.connect(process.env.MONGODB_URL);

        console.log("Conectado correctamente a la base de datos");
    } catch (error) {
        console.log(error);
        throw new Error("No se ha podido conectar a la base de datos")
    }
}

module.exports = {
    conection
}


