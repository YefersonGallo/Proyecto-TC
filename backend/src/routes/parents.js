const {Router} = require('express');
const router = Router();

const { getParent, getParents, deleteParent, createParent } = require('../controllers/parent.controller');

router.route('/')
    .get(getParents)
    .post(createParent)

router.route('/:name')
    .get(getParent)

router.route('/:id')
    .delete(deleteParent)

module.exports = router;