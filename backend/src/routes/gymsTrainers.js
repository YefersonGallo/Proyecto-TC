const {Router} = require('express');
const router = Router();

const { getGymTrainer, getGymsTrainers, createGymTrainer, deleteGymTrainer } = require('../controllers/gym.trainer');

router.route('/')
    .get(getGymsTrainers)
    .post(createGymTrainer)

router.route('/:codeGym')
    .get(getGymTrainer)

    router.route('/:id')
    .delete(deleteGymTrainer)

module.exports = router;