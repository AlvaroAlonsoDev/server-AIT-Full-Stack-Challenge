const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    liked_track: {
        type: Array,
        default: []
    }
});

module.exports = model("User", UserSchema, "user");

