const router = require('express').Router();
const Exercise = require('../../models/exercise.js');

router.get('/', async ({body}, res) => {
    Exercise.find({})
        .then(dbExercise => {
            res.status(200).json(dbExercise);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/', async ({ body }, res) => {
    Exercise.create(body)
        .then(dbExercise => {
            res.status(200).json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/:id', async ({ body }, res) => {
    Exercise.create(body)
        .then(dbExercise => {
            res.status(200).json(dbExercise);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

module.exports = router;