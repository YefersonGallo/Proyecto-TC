const {Router} = require('express');
const router = Router();

const { getEntersByMonth, getEntersByGym } = require('../controllers/reports.controller');

router.route('/month')
    .get(getEntersByMonth)

router.route('/gym')
    .get(getEntersByGym)

module.exports = router;