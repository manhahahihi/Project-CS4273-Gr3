const router = require("express").Router();
const User = require("../models/User");

router.get("/", (req, res) => {
    res.send("hey its user routing");
});

// create user
router.post("/", async (req, res) => {
    const newUser = User(req.body);
    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// update user
router.put("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user.userId === req.body.userId) {
            await user.updateOne({ $set: req.body });
            res.status(200).json("the user has been updated");
        } else {
            res.status(403).json("you can update only yours");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete user
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user.userId === req.body.userId) {
            await user.deleteOne();
            res.status(200).json("the user has been deleted");
        } else {
            res.status(403).json("you can delete only you");
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

// get a user
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get all user
router.get("/all/all", async (req, res) => {
    try {
        const user = await User.find({});
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;