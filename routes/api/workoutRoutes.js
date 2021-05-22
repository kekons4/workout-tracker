const router = require('express').Router();
const { Workout, Exercises } = require('../../models');
const db = require('mongoose');

// Get Last workout
router.get('/', ({body}, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"},
                totalWeight: {$sum: "$exercises.weight"}
            }
        }
    ])
    .then(workoutDB => {
        res.status(200).json(workoutDB);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Create new Workout
router.post('/', ({ body }, res) => {
    Workout.create(body)
        .then(dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// Add Exercise
router.put('/:id', (req, res) => {
    const {params: {id}, body } = req;
    Workout.findOneAndUpdate({_id: id}, { $push: { exercises: body } }, { new: true })
        .then(dbWorkout => {
            res.status(200).json(dbWorkout);
        })
        .catch(err => {
            console.error(err);
            res.status(400).json(err);
        });
});

// Fetch all workouts
router.get('/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"},
                totalWeight: {$sum: "$exercises.weight"}
            }
        }
    ])
    .then(workoutDB => {
        res.status(200).json(workoutDB);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;