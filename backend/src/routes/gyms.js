const {Router} = require('express');
const router = Router();

const { getGyms, deleteGym, getGym, updateGym, createGym } = require('../controllers/gym.controller');

router.route('/')
    .get(getGyms)
    .post(createGym)

router.route('/:id')
    .get(getGym)
    .put(updateGym)
    .delete(deleteGym)

module.exports = router;