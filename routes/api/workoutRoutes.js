const router = require("express").Router();
const db = require("../../models")

//get all workout and aggregate them
router.get("/", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                "totalDuration": { $sum: "$exercises.duration" },
            },
        },
    ])
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch((err) => {
            res.json(err);
        })
})

router.put("/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id, { $push: { exercises: body } }, { new: true, runValidators: true }
    )
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.post('/', (req, res) => {
    db.Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/range", (req, res) => {
    db.Workout.aggregate([
        {
            $addFields: {
                "totalDuration": { $sum: "$exercises.duration" },
            }
        }
    ])
        .sort({ "day": -1 })
        .limit(7)
        .then(dbRange => {
            res.json(dbRange)
        })
        .catch(err => {
            res.json(err)
        });
});

module.exports = router;