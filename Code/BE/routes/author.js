const router = require("express").Router();
const Author = require("../models/Author");

router.get("/", (req, res) => {
    res.send("hey its author routing");
});

// create author
router.post("/", async (req, res) => {
    const newAuthor = Author(req.body);
    try {
        const savedAuthor = await newAuthor.save();
        res.status(200).json(savedAuthor);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update author
router.put("/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (author.authorId === req.body.authorId) {
            await author.updateOne({ $set: req.body });
            res.status(200).json("the author has been updated");
        } else {
            res.status(403).json("you can update only yours");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete author
router.delete("/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (author.authorId === req.body.authorId) {
            await author.deleteOne();
            res.status(200).json("the author has been deleted");
        } else {
            res.status(403).json("you can delete only author");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a author
router.get("/:id", async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        res.status(200).json(author);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all author
router.get("/all/all", async (req, res) => {
    try {
        const author = await Author.find({});
        res.status(200).json(author);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;