const {Router} = require('express');
const router = Router();

const { getEPS, getEPSs, createEPS, deleteEPS } = require('../controllers/eps.controller');

router.route('/')
    .get(getEPSs)
    .post(createEPS)

router.route('/:name')
    .get(getEPS)

router.route('/:id')
    .delete(deleteEPS)

module.exports = router;