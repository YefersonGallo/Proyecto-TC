const {Router} = require('express');
const router = Router();

const { getUserRoutine, getUsersRoutines, createUserRoutine, deleteUserRoutine } = require('../controllers/user.routine.controller');

router.route('/')
    .get(getUsersRoutines)
    .post(createUserRoutine)

router.route('/:idUser')
    .get(getUserRoutine)

router.route('/:id')
    .delete(deleteUserRoutine)

module.exports = router;