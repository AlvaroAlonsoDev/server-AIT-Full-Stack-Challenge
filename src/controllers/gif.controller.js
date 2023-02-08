const GifModel = require("../models/gif.model")

const newGif = (req, res) => {
    try {
        // creamos el nuevo gif
        const new_gif = new GifModel(req.body);
        // Guardamos el nuevo gif
        new_gif.save((err, data) => {
            if (err) throw err;
            //devolver el post
            return res.status(200).json({
                data: data,
                meta: {
                    status: 200,
                    msg: "OK"
                }
            });
        });
    } catch (error) {
        return res.status(404).json({
            status: "error",
            mensaje: "Hay un error al crear el gif"
        });
    }
}
const getAll = (req, res) => {
    try {
        GifModel.find({}, (error, data) => {
            if (error) throw error;
            return res.status(200).json({
                data: data,
                meta: {
                    status: 200,
                    msg: "OK"
                }
            });
        })
    } catch (error) {
        return res.status(404).json({
            status: "error",
            mensaje: "Hay un error al crear el gif"
        });
    }
}

module.exports = {
    newGif,
    getAll
}