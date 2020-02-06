const {Router} = require('express');
const router = Router();

const { getUserAcepted, getUserAcepteds, deleteUserAcepted, createUserAcepted, updateUserAcepted } = require('../controllers/userAcepted.controller');

router.route('/')
    .get(getUserAcepteds)
    .post(createUserAcepted)

router.route('/:idUser')
    .get(getUserAcepted)

router.route('/:id')
    .delete(deleteUserAcepted)
    .put(updateUserAcepted)

module.exports = router;