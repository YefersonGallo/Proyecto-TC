const {Router} = require('express');
const router = Router();

const { getARL, getARLs, createARL, deleteARL } = require('../controllers/arl.controller');

router.route('/')
    .get(getARLs)
    .post(createARL)

router.route('/:name')
    .get(getARL)

router.route('/:id')
    .delete(deleteARL)

module.exports = router;