const {Router} = require('express');
const router = Router();

const { getUsers, deleteUser, getUser, updateUser, createUser } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:idUser')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;