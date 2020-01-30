const {Router} = require('express');
const router = Router();

const { getGymUser, getGymsUsers, createGymUser, deleteGymUser } = require('../controllers/enter.gym.controller');

router.route('/')
    .get(getGymsUsers)
    .post(createGymUser)

router.route('/:id')
    .get(getGymUser)
    .delete(deleteGymUser)

module.exports = router;