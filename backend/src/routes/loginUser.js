const {Router} = require('express');
const router = Router();

const { getUsersLogin, getUserLogin, createUserLogin, deleteUserLogin } = require('../controllers/login.user.controller');

router.route('/')
    .get(getUsersLogin)
    .post(createUserLogin)

router.route('/:id')
    .get(getUserLogin)
    .delete(deleteUserLogin)

module.exports = router;