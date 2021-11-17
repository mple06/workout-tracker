const express = require("express");
const router = express.Router();
const path = require("path");
const mongoose = require("mongoose")
const db = require("../models")

//route to the front page
router.get("/", (req, res) => {
    res.send(index.html)
});

//route to the exercise page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

//find exercise by ID
router.get("/exercise/:id", (req, res) => {
    db.Workout.findOne({ _id: mongojs.ObjectId(req.params.id) })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

// route to the stats page
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"))
})


module.exports = router;