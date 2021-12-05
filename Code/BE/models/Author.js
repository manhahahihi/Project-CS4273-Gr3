const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
    {
        authorId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        birth: {
            type: Number,
        },
        img: {
            type: String,
            default: "",
        },
        books: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Author", AuthorSchema);