const {Router} = require('express');
const router = Router();

const { getUbication, getUbications, deleteUbication, createUbication } = require('../controllers/ubication.controller');

router.route('/')
    .get(getUbications)
    .post(createUbication)

router.route('/:name')
    .get(getUbication)

router.route('/:id')
    .delete(deleteUbication)

module.exports = router;