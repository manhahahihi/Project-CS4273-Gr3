const router = require("express").Router();
const Category = require("../models/Category");

router.get("/", (req, res) => {
    res.send("hey its category routing");
});

// create category
router.post("/", async (req, res) => {
    const newCategory = Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update Category
router.put("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (category.categoryId === req.body.categoryId) {
            await category.updateOne({ $set: req.body });
            res.status(200).json("the Category has been updated");
        } else {
            res.status(403).json("you can update only Category");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete Category
router.delete("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (category.categoryId === req.body.categoryId) {
            await category.deleteOne();
            res.status(200).json("the Category has been deleted");
        } else {
            res.status(403).json("you can delete only Category");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a Category
router.get("/:id", async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all Category
router.get("/all/all", async (req, res) => {
    try {
        const category = await Category.find({});
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;