const {Router} = require('express');
const router = Router();

const { getTrainers, deleteTrainer, getTrainer, updateTrainer, createTrainer } = require('../controllers/trainer.controller');

router.route('/')
    .get(getTrainers)
    .post(createTrainer)

    router.route('/:idTrainer')
    .get(getTrainer)

router.route('/:id')
    .put(updateTrainer)
    .delete(deleteTrainer)

module.exports = router;