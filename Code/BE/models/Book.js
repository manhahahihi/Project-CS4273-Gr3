const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
    {
        bookId: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Book", BookSchema);