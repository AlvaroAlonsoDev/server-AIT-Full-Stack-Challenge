const { Schema, model } = require("mongoose");

const GifSchema = Schema({
    user: {
        type: Object,
        default: {
            name: "",
            avatar_url: ""
        }
    },
    title: {
        type: String,
        require: true
    },
    images: {
        type: Object,
        default: {
            original: {
                url: ""
            }
        }
    }
});

module.exports = model("Gif", GifSchema, "gif");

