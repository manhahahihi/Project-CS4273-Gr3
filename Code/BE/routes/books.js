const router = require("express").Router();
const Book = require("../models/Book");

router.get("/", (req, res) => {
    res.send("hey its books routing");
});

// create book
router.post("/", async (req, res) => {
    const newBook = Book(req.body);
    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update book
router.put("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book.bookId === req.body.bookId) {
            await book.updateOne({ $set: req.body });
            res.status(200).json("the book has been updated");
        } else {
            res.status(403).json("you can update only a book");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete book
router.delete("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (book.bookId === req.body.bookId) {
            await book.deleteOne();
            res.status(200).json("the book has been deleted");
        } else {
            res.status(403).json("you can delete only book");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a book
router.get("/:id", async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all book
router.get("/all/all", async (req, res) => {
    try {
        const book = await Book.find({});
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;