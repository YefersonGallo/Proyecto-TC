const {Router} = require('express');
const router = Router();

const { getTrainersLogin, getTrainerLogin, createTrainerLogin, deleteTrainerLogin } = require('../controllers/login.trainer.controller');

router.route('/')
    .get(getTrainersLogin)
    .post(createTrainerLogin)

router.route('/:id')
    .get(getTrainerLogin)
    .delete(deleteTrainerLogin)

module.exports = router;