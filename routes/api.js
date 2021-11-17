const router = require("router");
const Workout = require("Workout")

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
        .then((dbWorkouts) => {
            res.json(dbWorkouts);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;